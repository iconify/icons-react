import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwnzidx4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwnzidx4w"/>`,
		"fallback": "griddy-icons:banknote-filled",
	});
}

export default Component;
