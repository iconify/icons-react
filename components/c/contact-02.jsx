import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vzmo0wbuc.css';
import '../../css/c/cene_fbuj.css';
import '../../css/j/j9d1q1wok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vzmo0wbuc"/><path class="cene_fbuj"/><path class="j9d1q1wok"/></g>`,
		"fallback": "hugeicons:contact-02",
	});
}

export default Component;
