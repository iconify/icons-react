import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlqh62ffq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlqh62ffq"/>`,
		"fallback": "noviair-light:bot-alert",
	});
}

export default Component;
