import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcy98sbxp.css';
import '../../css/q/q6t1v8bmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcy98sbxp"/><path class="q6t1v8bmy"/>`,
		"fallback": "material-icon-theme:folder-nginx",
	});
}

export default Component;
