import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkdjwc4-g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkdjwc4-g"/>`,
		"fallback": "glyphs:align-slash-duo",
	});
}

export default Component;
