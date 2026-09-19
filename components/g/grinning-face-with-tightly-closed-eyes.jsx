import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/r/rghv5g6qb.css';
import '../../css/x/xwiqc7bhx.css';
import '../../css/e/ecw7etird.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="rghv5g6qb"/><path class="xwiqc7bhx"/><path class="ecw7etird"/></g>`,
		"fallback": "icon-park:grinning-face-with-tightly-closed-eyes",
	});
}

export default Component;
