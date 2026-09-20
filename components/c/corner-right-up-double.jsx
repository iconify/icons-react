import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gs8t9967m.css';
import '../../css/z/zfgwuxmnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gs8t9967m"/><path class="zfgwuxmnh"/></g>`,
		"fallback": "tabler:corner-right-up-double",
	});
}

export default Component;
