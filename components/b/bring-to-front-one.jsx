import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqd0yrbhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqd0yrbhc"/>`,
		"fallback": "icon-park-outline:bring-to-front-one",
	});
}

export default Component;
