import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lej-24q4i.css';
import '../../css/h/h6hs587dj.css';
import '../../css/y/yyw8rgbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lej-24q4i"/><path class="h6hs587dj"/><path class="yyw8rgbsu"/></g>`,
		"fallback": "keyline-icons:circle-navigation-fill",
	});
}

export default Component;
