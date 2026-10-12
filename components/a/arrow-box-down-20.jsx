import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqgrzwrtu.css';
import '../../css/j/jahmehbul.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqgrzwrtu"/><path class="jahmehbul"/>`,
		"fallback": "garden:arrow-box-down-20",
	});
}

export default Component;
