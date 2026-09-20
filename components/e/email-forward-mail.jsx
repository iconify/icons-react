import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-wsh-5xy.css';
import '../../css/y/yr5lehd0q.css';
import '../../css/w/w-kkr8a6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-wsh-5xy"/><path class="yr5lehd0q"/><path class="w-kkr8a6v"/>`,
		"fallback": "streamline-pixel:email-forward-mail",
	});
}

export default Component;
