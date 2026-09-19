import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpxwy_jwh.css';
import '../../css/k/kqmlytbco.css';
import '../../css/m/mw99uy5ni.css';
import '../../css/f/f86xz6sdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpxwy_jwh"/><path class="kqmlytbco"/><path class="mw99uy5ni"/><path class="f86xz6sdl"/>`,
		"fallback": "carbon:ibm-cloud-pak-network-automation",
	});
}

export default Component;
