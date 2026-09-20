import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxth97d7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxth97d7b"/>`,
		"fallback": "majesticons:covid-exclamation-line",
	});
}

export default Component;
