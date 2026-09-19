import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e3_0itu4g.css';
import '../../css/u/u-br6yhtk.css';
import '../../css/z/zct82vb9f.css';
import '../../css/f/fll0uqb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e3_0itu4g"/><path class="u-br6yhtk"/><path class="zct82vb9f"/><path class="fll0uqb6i"/></g>`,
		"fallback": "covid:covid19-virus-warning-2",
	});
}

export default Component;
