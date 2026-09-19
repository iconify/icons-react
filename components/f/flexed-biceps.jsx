import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lldg-yb_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lldg-yb_z"/>`,
		"fallback": "fluent-emoji-high-contrast:flexed-biceps",
	});
}

export default Component;
