import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wv4j2gbbi.css';
import '../../css/l/lzjfkob3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wv4j2gbbi"/><path class="lzjfkob3f"/></g>`,
		"fallback": "catppuccin:eslint",
	});
}

export default Component;
