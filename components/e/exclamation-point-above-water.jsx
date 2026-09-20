import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5p60rbrg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5p60rbrg"/>`,
		"fallback": "pinhead:exclamation-point-above-water",
	});
}

export default Component;
