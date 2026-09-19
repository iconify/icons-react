import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5u55absk.css';
import '../../css/q/qvuh0pbfm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5u55absk"/><path class="qvuh0pbfm"/>`,
		"fallback": "carbon:direction-straight-filled",
	});
}

export default Component;
