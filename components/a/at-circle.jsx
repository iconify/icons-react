import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze2vclaer.css';
import '../../css/t/tiqlprpox.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze2vclaer"/><path class="tiqlprpox"/>`,
		"fallback": "ion:at-circle",
	});
}

export default Component;
