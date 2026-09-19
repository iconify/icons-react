import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iymj-b0-x.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iymj-b0-x"/>`,
		"fallback": "devicon:codex",
	});
}

export default Component;
