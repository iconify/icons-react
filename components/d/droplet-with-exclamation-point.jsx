import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcl98g9-s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcl98g9-s"/>`,
		"fallback": "pinhead:droplet-with-exclamation-point",
	});
}

export default Component;
