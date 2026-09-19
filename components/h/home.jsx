import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muq5rlovc.css';

const viewBox = {"width":748,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muq5rlovc"/>`,
		"fallback": "ls:home",
	});
}

export default Component;
