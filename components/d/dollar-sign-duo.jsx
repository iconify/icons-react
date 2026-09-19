import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdf80gtnr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdf80gtnr"/>`,
		"fallback": "glyphs:dollar-sign-duo",
	});
}

export default Component;
