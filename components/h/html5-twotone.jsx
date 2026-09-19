import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1pu1rrxi.css';
import '../../css/g/gmc9imcga.css';
import '../../css/y/y192wnsah.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1pu1rrxi"/><path class="gmc9imcga"/><path class="y192wnsah"/>`,
		"fallback": "ant-design:html5-twotone",
	});
}

export default Component;
