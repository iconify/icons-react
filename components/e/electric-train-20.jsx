import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4es65b1e.css';
import '../../css/f/f1nb5abut.css';
import '../../css/s/spc7yovzj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4es65b1e"/><path class="f1nb5abut"/><path class="spc7yovzj"/>`,
		"fallback": "energy-icons:electric-train-20",
	});
}

export default Component;
