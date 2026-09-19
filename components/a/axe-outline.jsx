import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9w2xqbnk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9w2xqbnk"/>`,
		"fallback": "glyphs:axe-outline",
	});
}

export default Component;
