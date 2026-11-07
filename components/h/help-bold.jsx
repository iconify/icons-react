import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw5g050oe.css';
import '../../css/w/w19abnbit.css';
import '../../css/t/tsguwswfn.css';
import '../../css/a/ae2knfujf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw5g050oe"/><path class="w19abnbit"/><path class="tsguwswfn"/><path class="ae2knfujf"/>`,
		"fallback": "solar:help-bold",
	});
}

export default Component;
