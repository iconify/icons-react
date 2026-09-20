import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji2qzhbit.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/y/y243fzwzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGYvjPKcuU" x1="343.16" x2="5.951" y1="238.775" y2="-1.029" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ji2qzhbit"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGYvjPKcuU)" class="y243fzwzh"/>`,
		"fallback": "selfhst:dflow",
	});
}

export default Component;
