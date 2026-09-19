import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpt8g1b7z.css';
import '../../css/n/nketkfbkv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpt8g1b7z"/><path class="nketkfbkv"/>`,
		"fallback": "carbon:document-video",
	});
}

export default Component;
