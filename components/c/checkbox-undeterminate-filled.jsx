import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1ooz0bja.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1ooz0bja"/>`,
		"fallback": "carbon:checkbox-undeterminate-filled",
	});
}

export default Component;
