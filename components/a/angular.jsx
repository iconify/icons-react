import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksox703bk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksox703bk"/>`,
		"fallback": "picon:angular",
	});
}

export default Component;
