import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5i-ymejz.css';
import '../../css/x/xgar21b2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5i-ymejz"/><path class="xgar21b2f"/>`,
		"fallback": "energy-icons:hurricane-48",
	});
}

export default Component;
