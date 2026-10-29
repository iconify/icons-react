import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzkrhxb8m.css';
import '../../css/r/rwxnmqb4i.css';
import '../../css/y/ye3obsogn.css';
import '../../css/x/xewjnac0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a wzkrhxb8m"/><path class="rwxnmqb4i wm-a"/><path class="wm-a ye3obsogn"/><path class="wm-a xewjnac0q"/>`,
		"fallback": "withicons-bauhaus:film",
	});
}

export default Component;
