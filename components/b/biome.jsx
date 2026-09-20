import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdp06ek3y.css';

const viewBox = {"width":74,"height":74};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdp06ek3y"/>`,
		"fallback": "material-icon-theme:biome",
	});
}

export default Component;
