import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4jd6hbxa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4jd6hbxa"/>`,
		"fallback": "energy-icons:inductor-48-bold",
	});
}

export default Component;
