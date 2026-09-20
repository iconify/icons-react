import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx3zlefwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx3zlefwg"/>`,
		"fallback": "mage:arrow-up-left-square-fill",
	});
}

export default Component;
