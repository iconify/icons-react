import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o31z5xgnj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o31z5xgnj"/>`,
		"fallback": "catppuccin:file",
	});
}

export default Component;
