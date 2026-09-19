import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqldgeblj.css';
import '../../css/u/u-gzl_v4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqldgeblj"/><circle class="u-gzl_v4x"/></g>`,
		"fallback": "icon-park-outline:dolphin",
	});
}

export default Component;
