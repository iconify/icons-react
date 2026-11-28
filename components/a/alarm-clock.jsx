import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lzl88sbdw.css';
import '../../css/k/kzudsg6mg.css';
import '../../css/n/n41jx5b9q.css';
import '../../css/r/r-ge1zblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><circle class="lzl88sbdw"/><path class="kzudsg6mg"/><path class="n41jx5b9q"/><path class="r-ge1zblt"/></g>`,
		"fallback": "iconaut:alarm-clock",
	});
}

export default Component;
