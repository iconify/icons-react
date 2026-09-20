import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ei-vbiq.css';
import '../../css/v/vexocobrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ei-vbiq"/><path class="vexocobrh"/>`,
		"fallback": "mage:hospital-square-fill",
	});
}

export default Component;
