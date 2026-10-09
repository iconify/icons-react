import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0d0xub9d.css';
import '../../css/y/yqu1ju23x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0d0xub9d"/><path class="yqu1ju23x"/>`,
		"fallback": "energy-icons:clipboard-check-48-bold",
	});
}

export default Component;
