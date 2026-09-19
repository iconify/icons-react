import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/gsanjh7bp.css';
import '../../css/g/g6yjxub8q.css';
import '../../css/i/imnk_rbly.css';
import '../../css/k/kk6i7cvcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="gsanjh7bp"/><path class="g6yjxub8q"/><path class="imnk_rbly"/><rect class="kk6i7cvcd"/></g>`,
		"fallback": "icon-park:delivery",
	});
}

export default Component;
