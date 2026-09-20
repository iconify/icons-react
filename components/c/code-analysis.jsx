import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydb9ehbry.css';
import '../../css/u/u9kw3qbji.css';
import '../../css/g/gjcnw9bjg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ydb9ehbry"/><path class="u9kw3qbji"/><path class="gjcnw9bjg"/></g>`,
		"fallback": "streamline-flex-color:code-analysis",
	});
}

export default Component;
