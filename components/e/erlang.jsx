import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcf1f9bjy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcf1f9bjy"/>`,
		"fallback": "devicon-plain:erlang",
	});
}

export default Component;
