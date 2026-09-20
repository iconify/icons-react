import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7wjvtb8g.css';
import '../../css/r/ra875cffg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7wjvtb8g"/><path class="ra875cffg"/>`,
		"fallback": "mage:box-3d-question-mark-fill",
	});
}

export default Component;
