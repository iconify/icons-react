import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmgfy0_4f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qmgfy0_4f"/>`,
		"fallback": "glyphs:bell-slash-outline",
	});
}

export default Component;
