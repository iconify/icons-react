import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnkbx2uas.css';
import '../../css/j/jvdojbb4j.css';
import '../../css/j/j5lb_-btt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnkbx2uas"/><path class="jvdojbb4j"/><path class="j5lb_-btt"/>`,
		"fallback": "energy-icons:headset-20",
	});
}

export default Component;
