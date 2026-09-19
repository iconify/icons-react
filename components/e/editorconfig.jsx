import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy1cqobue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy1cqobue"/>`,
		"fallback": "catppuccin:editorconfig",
	});
}

export default Component;
