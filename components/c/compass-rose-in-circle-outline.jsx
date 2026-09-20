import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soayfe2qc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soayfe2qc"/>`,
		"fallback": "pinhead:compass-rose-in-circle-outline",
	});
}

export default Component;
