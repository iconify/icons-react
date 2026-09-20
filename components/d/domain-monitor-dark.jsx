import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zejmubckr.css';
import '../../css/d/dy9twxbqe.css';
import '../../css/d/d2oowm1mw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zejmubckr"/><path class="dy9twxbqe"/><path class="d2oowm1mw"/>`,
		"fallback": "selfhst:domain-monitor-dark",
	});
}

export default Component;
