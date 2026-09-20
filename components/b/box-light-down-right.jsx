import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihsfb_26y.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihsfb_26y"/>`,
		"fallback": "memory:box-light-down-right",
	});
}

export default Component;
