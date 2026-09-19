import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsf0-2bjx.css';
import '../../css/b/bouxdeh8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xsf0-2bjx"/><path class="bouxdeh8m"/>`,
		"fallback": "ion:accessibility-outline",
	});
}

export default Component;
