import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o215ocbdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o215ocbdt"/>`,
		"fallback": "icon-park-outline:chef-hat-one",
	});
}

export default Component;
