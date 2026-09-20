import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yfeqnhb9y.css';
import '../../css/i/iiq2v4bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yfeqnhb9y"/><path class="iiq2v4bgm"/></g>`,
		"fallback": "lucide:gem",
	});
}

export default Component;
