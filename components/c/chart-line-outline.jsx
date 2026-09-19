import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndna15brn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndna15brn"/>`,
		"fallback": "glyphs:chart-line-outline",
	});
}

export default Component;
