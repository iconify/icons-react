import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1hbf2blw.css';
import '../../css/y/y_4y_gbst.css';
import '../../css/d/dwj5ymbqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1hbf2blw"/><path class="y_4y_gbst"/><path class="dwj5ymbqt"/>`,
		"fallback": "material-icon-theme:folder-vue-directives-open",
	});
}

export default Component;
