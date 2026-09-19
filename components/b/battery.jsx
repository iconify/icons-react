import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x68y6ab4a.css';
import '../../css/m/mgz8c9b8i.css';
import '../../css/u/u07nh0bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer x68y6ab4a"/><path class="duoicon-primary-layer mgz8c9b8i"/><path class="duoicon-secondary-layer u07nh0bbp"/>`,
		"fallback": "duo-icons:battery",
	});
}

export default Component;
