import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r3mm1bcmi.css';
import '../../css/h/hoqlw_box.css';
import '../../css/c/cqvfmjbtu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="r3mm1bcmi"/><path class="hoqlw_box"/><path class="cqvfmjbtu"/></g>`,
		"fallback": "icon-park:handwashing",
	});
}

export default Component;
