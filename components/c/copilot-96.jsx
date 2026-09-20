import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm84y2b2v.css';
import '../../css/e/esmuzmbhr.css';

const viewBox = {"width":96,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm84y2b2v"/><path class="esmuzmbhr"/>`,
		"fallback": "octicon:copilot-96",
	});
}

export default Component;
