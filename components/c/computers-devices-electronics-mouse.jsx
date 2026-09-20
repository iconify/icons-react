import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5n7r2czb.css';
import '../../css/m/muo8ifbsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5n7r2czb"/><path class="muo8ifbsh"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-mouse",
	});
}

export default Component;
