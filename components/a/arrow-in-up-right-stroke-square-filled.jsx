import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2k6oubdw.css';
import '../../css/k/kwq8pvbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2k6oubdw"/><path class="kwq8pvbmg"/>`,
		"fallback": "boxicons:arrow-in-up-right-stroke-square-filled",
	});
}

export default Component;
