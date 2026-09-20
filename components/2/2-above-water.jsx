import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7gxj6bpw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7gxj6bpw"/>`,
		"fallback": "pinhead:2-above-water",
	});
}

export default Component;
