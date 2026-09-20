import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj4bs2b-y.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj4bs2b-y"/>`,
		"fallback": "wpf:books",
	});
}

export default Component;
