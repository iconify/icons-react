import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crqs91boh.css';
import '../../css/s/sxbjau1tw.css';

const viewBox = {"width":181.048,"height":23.983,"left":-0.679,"top":-0.679};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crqs91boh"/><path class="sxbjau1tw"/>`,
		"fallback": "thesvg-color:cvs",
	});
}

export default Component;
