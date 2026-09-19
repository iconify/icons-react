import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctoyw6bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ctoyw6bbg"/>`,
		"fallback": "akar-icons:circle",
	});
}

export default Component;
