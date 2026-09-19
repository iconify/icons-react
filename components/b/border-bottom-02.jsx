import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axyfo5byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axyfo5byi"/>`,
		"fallback": "hugeicons:border-bottom-02",
	});
}

export default Component;
