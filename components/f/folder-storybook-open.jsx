import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hwqg5tbfy.css';
import '../../css/w/wpfh7ntzs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="hwqg5tbfy"/><path class="wpfh7ntzs"/></g>`,
		"fallback": "catppuccin:folder-storybook-open",
	});
}

export default Component;
