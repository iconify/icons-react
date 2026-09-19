import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb70uhhrd.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb70uhhrd"/>`,
		"fallback": "icon-park-solid:bottom-bar-one",
	});
}

export default Component;
