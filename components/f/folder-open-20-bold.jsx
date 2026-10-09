import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp3cjxxjv.css';
import '../../css/x/xranyficx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp3cjxxjv"/><path class="xranyficx"/>`,
		"fallback": "energy-icons:folder-open-20-bold",
	});
}

export default Component;
