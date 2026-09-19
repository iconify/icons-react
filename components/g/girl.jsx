import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgl2kc_3j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgl2kc_3j"/>`,
		"fallback": "dinkie-icons:girl",
	});
}

export default Component;
