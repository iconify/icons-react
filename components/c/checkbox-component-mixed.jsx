import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctgsm2yze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctgsm2yze"/>`,
		"fallback": "ix:checkbox-component-mixed",
	});
}

export default Component;
