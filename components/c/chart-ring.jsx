import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir8nhuf2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir8nhuf2n"/>`,
		"fallback": "carbon:chart-ring",
	});
}

export default Component;
