import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdxv9jpxh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdxv9jpxh"/>`,
		"fallback": "pinhead:dispensing-machine-with-snowflake",
	});
}

export default Component;
