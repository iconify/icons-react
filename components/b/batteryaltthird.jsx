import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdgqg2iiw.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdgqg2iiw"/>`,
		"fallback": "whh:batteryaltthird",
	});
}

export default Component;
