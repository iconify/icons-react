import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iztj1m4kj.css';
import '../../css/m/mr6auulay.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iztj1m4kj"/><path class="mr6auulay"/>`,
		"fallback": "energy-icons:chart-bar-horizontal-20-bold",
	});
}

export default Component;
