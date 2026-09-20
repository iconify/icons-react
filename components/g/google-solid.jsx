import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdc5hdbge.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdc5hdbge"/>`,
		"fallback": "streamline:google-solid",
	});
}

export default Component;
