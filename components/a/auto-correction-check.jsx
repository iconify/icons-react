import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/u/uh5e88bra.css';
import '../../css/r/r-dx1tbso.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="uh5e88bra"/><path class="r-dx1tbso"/></g>`,
		"fallback": "streamline-flex-color:auto-correction-check",
	});
}

export default Component;
