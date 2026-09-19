import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bct1xkbdw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bct1xkbdw"/>`,
		"fallback": "ep:dessert",
	});
}

export default Component;
