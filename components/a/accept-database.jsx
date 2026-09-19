import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyp2mwbic.css';
import '../../css/j/j8-uowi8q.css';
import '../../css/j/jc2shdofb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyp2mwbic"/><circle class="j8-uowi8q"/><path class="jc2shdofb"/>`,
		"fallback": "flat-color-icons:accept-database",
	});
}

export default Component;
