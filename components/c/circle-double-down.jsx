import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/v/v7hbivc1w.css';
import '../../css/n/ndyyuybyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="v7hbivc1w"/><path class="ndyyuybyf"/></g>`,
		"fallback": "icon-park:circle-double-down",
	});
}

export default Component;
