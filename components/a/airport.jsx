import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sci_v2bjl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sci_v2bjl"/>`,
		"fallback": "map:airport",
	});
}

export default Component;
