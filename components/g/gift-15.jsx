import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l12_aub-g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l12_aub-g"/>`,
		"fallback": "maki:gift-15",
	});
}

export default Component;
