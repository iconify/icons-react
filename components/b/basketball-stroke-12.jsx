import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skiiyvb2f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skiiyvb2f"/>`,
		"fallback": "garden:basketball-stroke-12",
	});
}

export default Component;
