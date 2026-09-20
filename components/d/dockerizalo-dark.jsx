import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho57073-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho57073-b"/>`,
		"fallback": "selfhst:dockerizalo-dark",
	});
}

export default Component;
