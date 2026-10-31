import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfy7pyfja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfy7pyfja"/>`,
		"fallback": "coolicons:brain-fill-round",
	});
}

export default Component;
