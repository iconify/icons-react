import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg6obmb_i.css';
import '../../css/c/c_7z8eb4f.css';

const viewBox = {"width":201,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg6obmb_i"/><path class="c_7z8eb4f"/>`,
		"fallback": "thesvg-color:groq",
	});
}

export default Component;
