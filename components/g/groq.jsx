import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa5z70b5c.css';
import '../../css/a/aa_dfybgb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa5z70b5c"/><path class="aa_dfybgb"/>`,
		"fallback": "devicon:groq",
	});
}

export default Component;
