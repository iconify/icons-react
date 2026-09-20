import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv572stwh.css';
import '../../css/n/nee9o4w2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv572stwh"/><path class="nee9o4w2r"/>`,
		"fallback": "streamline-ultimate:cog-search-1-bold",
	});
}

export default Component;
