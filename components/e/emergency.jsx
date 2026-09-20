import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huotcacxk.css';
import '../../css/j/jixvyn1ey.css';
import '../../css/b/bs4b88r6x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huotcacxk"/><path class="jixvyn1ey"/><path class="bs4b88r6x"/>`,
		"fallback": "medical-icon:emergency",
	});
}

export default Component;
