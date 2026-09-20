import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t38kseb5u.css';
import '../../css/a/ahikl4b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t38kseb5u"/><path class="ahikl4b4s"/>`,
		"fallback": "token:abr",
	});
}

export default Component;
