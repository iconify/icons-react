import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztwu7ut0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztwu7ut0n"/>`,
		"fallback": "icon-park-solid:bat",
	});
}

export default Component;
