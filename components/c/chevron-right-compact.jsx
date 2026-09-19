import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhx61zfib.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhx61zfib"/>`,
		"fallback": "codicon:chevron-right-compact",
	});
}

export default Component;
