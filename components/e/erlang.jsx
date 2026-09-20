import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn5ti5b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn5ti5b8t"/>`,
		"fallback": "thesvg:erlang",
	});
}

export default Component;
