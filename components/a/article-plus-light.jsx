import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5elhacbk.css';
import '../../css/n/na_x8vbwq.css';
import '../../css/f/f_pnwq58d.css';
import '../../css/a/ar8blrbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5elhacbk"/><path class="na_x8vbwq"/><path clip-rule="evenodd" class="f_pnwq58d"/><path class="ar8blrbfl"/>`,
		"fallback": "stash:article-plus-light",
	});
}

export default Component;
