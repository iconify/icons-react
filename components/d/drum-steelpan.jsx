import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi0991b1i.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi0991b1i"/>`,
		"fallback": "fa6-solid:drum-steelpan",
	});
}

export default Component;
