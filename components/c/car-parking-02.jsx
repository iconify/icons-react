import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pqzzsgbbu.css';
import '../../css/j/jsltuxbxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pqzzsgbbu"/><path class="jsltuxbxo"/></g>`,
		"fallback": "hugeicons:car-parking-02",
	});
}

export default Component;
