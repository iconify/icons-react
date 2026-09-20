import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k7qd0xhrq.css';

const viewBox = {"width":200,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k7qd0xhrq"/>`,
		"fallback": "material-icon-theme:crystal-light",
	});
}

export default Component;
