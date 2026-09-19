import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm0c_-b-i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm0c_-b-i"/>`,
		"fallback": "icon-park-outline:alipay",
	});
}

export default Component;
