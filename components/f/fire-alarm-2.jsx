import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c61mj52lo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c61mj52lo"/>`,
		"fallback": "streamline-flex:fire-alarm-2",
	});
}

export default Component;
