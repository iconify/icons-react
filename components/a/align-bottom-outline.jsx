import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbwkt4b1u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbwkt4b1u"/>`,
		"fallback": "teenyicons:align-bottom-outline",
	});
}

export default Component;
