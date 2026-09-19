import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a91t2_tvg.css';

const viewBox = {"width":800,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a91t2_tvg"/>`,
		"fallback": "il:dropbox",
	});
}

export default Component;
