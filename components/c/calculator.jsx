import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq4daq7og.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq4daq7og"/>`,
		"fallback": "glyphs:calculator",
	});
}

export default Component;
