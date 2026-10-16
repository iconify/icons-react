import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soauwjbuz.css';
import '../../css/x/xqe1shbes.css';
import '../../css/w/wp_1hutrl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soauwjbuz"/><path class="xqe1shbes"/><path class="wp_1hutrl"/>`,
		"fallback": "energy-icons:gas-holder-20-bold",
	});
}

export default Component;
