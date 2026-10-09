import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1yx6v2_d.css';
import '../../css/t/tds6hxauo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1yx6v2_d"/><path class="tds6hxauo"/>`,
		"fallback": "energy-icons:apple-48",
	});
}

export default Component;
