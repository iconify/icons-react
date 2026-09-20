import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyeaw4bia.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyeaw4bia"/>`,
		"fallback": "map:dentist",
	});
}

export default Component;
