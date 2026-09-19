import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqhngwt5b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqhngwt5b"/>`,
		"fallback": "glyphs:bench-outline",
	});
}

export default Component;
