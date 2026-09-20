import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czf_ozg6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czf_ozg6b"/>`,
		"fallback": "selfhst:beekeeper-studio-light",
	});
}

export default Component;
