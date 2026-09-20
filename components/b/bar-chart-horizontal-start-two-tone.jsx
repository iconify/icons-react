import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/byaevlepd.css';
import '../../css/x/x-y_kqbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="byaevlepd"/><path class="x-y_kqbjs"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-start-two-tone",
	});
}

export default Component;
