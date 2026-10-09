import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dibcbtkzz.css';
import '../../css/p/pjb032xjh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dibcbtkzz"/><path class="pjb032xjh"/>`,
		"fallback": "energy-icons:award-48-bold",
	});
}

export default Component;
