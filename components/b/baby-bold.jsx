import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4wa_q_fc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h4wa_q_fc"/>`,
		"fallback": "glyphs:baby-bold",
	});
}

export default Component;
