import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt1z6xbjk.css';
import '../../css/p/plng_wb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary wt1z6xbjk"/><path class="plng_wb5t primary"/>`,
		"fallback": "iconaut:flow-off-page-duo",
	});
}

export default Component;
