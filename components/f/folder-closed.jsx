import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yj3m_tb7r.css';
import '../../css/v/vqi8tqbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yj3m_tb7r"/><path class="vqi8tqbxo"/></g>`,
		"fallback": "vadivam:folder-closed",
	});
}

export default Component;
