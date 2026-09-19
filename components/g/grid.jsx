import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwrtmg0fx.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwrtmg0fx"/>`,
		"fallback": "il:grid",
	});
}

export default Component;
