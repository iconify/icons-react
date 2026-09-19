import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gtr29ujph.css';
import '../../css/m/mg2vvdbge.css';
import '../../css/e/eb8fy6btr.css';
import '../../css/b/b0fz9dbol.css';
import '../../css/v/vfj5kp_5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="gtr29ujph"/><path class="mg2vvdbge"/><path class="eb8fy6btr"/><path class="b0fz9dbol"/><path class="vfj5kp_5t"/></g>`,
		"fallback": "icon-park:bolt-one",
	});
}

export default Component;
