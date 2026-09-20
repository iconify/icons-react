import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axydisbik.css';
import '../../css/q/qa0jhaboz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axydisbik"/><path class="qa0jhaboz"/>`,
		"fallback": "material-icon-theme:folder-utils-open",
	});
}

export default Component;
