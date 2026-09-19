import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjw0j7b5s.css';
import '../../css/l/ll6-1jbrc.css';
import '../../css/w/wd3cbw0zu.css';
import '../../css/z/zilhnylyb.css';
import '../../css/r/rko52wi9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjw0j7b5s"/><path class="ll6-1jbrc"/><path class="wd3cbw0zu"/><path class="zilhnylyb"/><path class="rko52wi9e"/>`,
		"fallback": "carbon:deployment-pattern",
	});
}

export default Component;
