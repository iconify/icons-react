import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iur812moa.css';
import '../../css/y/y40w3sucp.css';
import '../../css/o/o6x3htbqm.css';
import '../../css/r/rzkosvb-d.css';
import '../../css/z/zkili02bk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iur812moa"/><path class="y40w3sucp"/><path class="o6x3htbqm"/><path class="rzkosvb-d"/><path class="zkili02bk"/>`,
		"fallback": "energy-icons:house-solar-20-bold",
	});
}

export default Component;
