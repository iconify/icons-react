import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg2il3bok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg2il3bok"/>`,
		"fallback": "icon-park-outline:homestay",
	});
}

export default Component;
