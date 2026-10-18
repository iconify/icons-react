import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wf3b3gb2z.css';
import '../../css/y/y9zlo3-ee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wf3b3gb2z"/><path class="y9zlo3-ee"/>`,
		"fallback": "energy-icons:biochar-48-bold",
	});
}

export default Component;
