import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6bq5urfw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6bq5urfw"/>`,
		"fallback": "energy-icons:infinity-20",
	});
}

export default Component;
