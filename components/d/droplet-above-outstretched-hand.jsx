import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha2ibjb3r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha2ibjb3r"/>`,
		"fallback": "pinhead:droplet-above-outstretched-hand",
	});
}

export default Component;
