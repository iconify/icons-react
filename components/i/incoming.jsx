import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/pwnwi236m.css';
import '../../css/r/rdtq9xb-o.css';
import '../../css/e/ecnlh9tzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="pwnwi236m"/><path class="rdtq9xb-o"/><path class="ecnlh9tzj"/></g>`,
		"fallback": "icon-park-solid:incoming",
	});
}

export default Component;
