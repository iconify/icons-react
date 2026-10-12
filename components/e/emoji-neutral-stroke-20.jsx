import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yynfaacui.css';
import '../../css/t/tbe9gjgli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yynfaacui"/><path class="tbe9gjgli"/>`,
		"fallback": "garden:emoji-neutral-stroke-20",
	});
}

export default Component;
