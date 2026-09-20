import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-70ol5nq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-70ol5nq"/>`,
		"fallback": "streamline:entertainment-control-button-power-1-power-button-on-off",
	});
}

export default Component;
