import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/q/q8fynub3l.css';
import '../../css/o/opa5qzb8a.css';
import '../../css/c/cubzrvp4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="q8fynub3l"/><path class="opa5qzb8a"/><path class="cubzrvp4u"/></g>`,
		"fallback": "icon-park:grinning-face-with-tightly-closed-eyes-open-mouth",
	});
}

export default Component;
