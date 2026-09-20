import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/og_9js9al.css';
import '../../css/x/xjh3njbok.css';
import '../../css/w/w4_njp3qx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="og_9js9al"/><circle class="xjh3njbok"/><path class="w4_njp3qx"/></g>`,
		"fallback": "meteor-icons:git-compare",
	});
}

export default Component;
