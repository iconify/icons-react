import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3cwk-ews.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3cwk-ews"/>`,
		"fallback": "streamline-flex:facebook-1-solid",
	});
}

export default Component;
