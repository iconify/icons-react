import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsm13zbds.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsm13zbds"/>`,
		"fallback": "glyphs:ampersand-2-duo",
	});
}

export default Component;
