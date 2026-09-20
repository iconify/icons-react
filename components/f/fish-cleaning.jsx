import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdckdr6_d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdckdr6_d"/>`,
		"fallback": "map:fish-cleaning",
	});
}

export default Component;
