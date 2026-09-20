import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l99186bmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l99186bmr"/>`,
		"fallback": "streamline-flex:gift-2-solid",
	});
}

export default Component;
