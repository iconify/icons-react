import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkwocjb5q.css';
import '../../css/h/hhg2zab-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkwocjb5q"/><path class="hhg2zab-w"/>`,
		"fallback": "energy-icons:battery-half-20",
	});
}

export default Component;
