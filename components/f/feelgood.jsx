import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/t2gsdyb8i.css';
import '../../css/e/euzfwrbhu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="t2gsdyb8i"/><path class="euzfwrbhu"/></g>`,
		"fallback": "icon-park-solid:feelgood",
	});
}

export default Component;
