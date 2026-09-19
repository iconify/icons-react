import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcx2xzbng.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcx2xzbng"/>`,
		"fallback": "ei:chart",
	});
}

export default Component;
