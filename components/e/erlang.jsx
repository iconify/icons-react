import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ku02pwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3ku02pwb"/>`,
		"fallback": "thesvg-color:erlang",
	});
}

export default Component;
