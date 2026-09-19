import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avd1rxbnl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avd1rxbnl"/>`,
		"fallback": "icon-park:alipay",
	});
}

export default Component;
