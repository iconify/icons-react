import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/thy6c7oyj.css';
import '../../css/b/biku6abqe.css';
import '../../css/r/rtryn3e-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="thy6c7oyj"/><path class="biku6abqe"/><path class="rtryn3e-j"/></g>`,
		"fallback": "icon-park:find-one",
	});
}

export default Component;
