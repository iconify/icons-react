import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr83kubtu.css';
import '../../css/f/fyjv8ddts.css';
import '../../css/x/x5aslfb5u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr83kubtu"/><path class="fyjv8ddts"/><path class="x5aslfb5u"/>`,
		"fallback": "energy-icons:agv-20-bold",
	});
}

export default Component;
