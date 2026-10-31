import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi6mprboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi6mprboa"/>`,
		"fallback": "coolicons:git-pull-request-closed-fill-round",
	});
}

export default Component;
