import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygd2uvbqw.css';
import '../../css/f/fpb-29h3j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygd2uvbqw"/><path class="fpb-29h3j"/>`,
		"fallback": "flat-color-icons:cursor",
	});
}

export default Component;
