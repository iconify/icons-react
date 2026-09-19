import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ced59lb-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ced59lb-g"/>`,
		"fallback": "catppuccin:docker-compose",
	});
}

export default Component;
