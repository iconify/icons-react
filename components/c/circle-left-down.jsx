import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/t/t96dlrb2c.css';
import '../../css/c/c20l6s2sh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="t96dlrb2c"/><path class="c20l6s2sh"/></g>`,
		"fallback": "icon-park:circle-left-down",
	});
}

export default Component;
