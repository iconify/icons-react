import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vju6l6brq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vju6l6brq"/>`,
		"fallback": "wpf:geofence",
	});
}

export default Component;
