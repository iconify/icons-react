import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx4405b0a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx4405b0a"/>`,
		"fallback": "charm:droplet",
	});
}

export default Component;
