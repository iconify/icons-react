import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrl4dlb_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrl4dlb_w"/>`,
		"fallback": "streamline-plump:bag-solid",
	});
}

export default Component;
