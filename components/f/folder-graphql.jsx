import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3ugng94a.css';
import '../../css/j/j4wgwkb8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3ugng94a"/><path class="j4wgwkb8h"/>`,
		"fallback": "catppuccin:folder-graphql",
	});
}

export default Component;
