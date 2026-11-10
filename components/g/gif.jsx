import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bslrgc91y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bslrgc91y"/>`,
		"fallback": "andrsrxn:gif",
	});
}

export default Component;
