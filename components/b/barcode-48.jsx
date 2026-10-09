import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5ih_gowq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5ih_gowq"/>`,
		"fallback": "energy-icons:barcode-48",
	});
}

export default Component;
