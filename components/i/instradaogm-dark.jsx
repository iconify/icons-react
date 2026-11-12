import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af9mh_ibn.css';
import '../../css/m/mqohxr3by.css';
import '../../css/y/ysfe7ac7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af9mh_ibn"/><path class="mqohxr3by"/><path class="ysfe7ac7m"/>`,
		"fallback": "selfhst:instradaogm-dark",
	});
}

export default Component;
