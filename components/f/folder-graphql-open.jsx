import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yypzf8b8r.css';
import '../../css/s/s1altqbfo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yypzf8b8r"/><path class="s1altqbfo"/>`,
		"fallback": "catppuccin:folder-graphql-open",
	});
}

export default Component;
