import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/o/opa5qzb8a.css';
import '../../css/c/cubzrvp4u.css';
import '../../css/h/hlci-uhhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="opa5qzb8a"/><path class="cubzrvp4u"/><path class="hlci-uhhr"/></g>`,
		"fallback": "icon-park:confounded-face",
	});
}

export default Component;
