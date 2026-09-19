import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s99ga2boz.css';
import '../../css/m/maw0v5bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer s99ga2boz"/><path class="duoicon-primary-layer maw0v5bht"/>`,
		"fallback": "duo-icons:chip",
	});
}

export default Component;
