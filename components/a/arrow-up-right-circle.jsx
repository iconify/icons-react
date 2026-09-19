import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag_fw_b7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag_fw_b7k"/>`,
		"fallback": "bi:arrow-up-right-circle",
	});
}

export default Component;
