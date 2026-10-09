import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqn8gqb4e.css';
import '../../css/m/m-ue7vdss.css';
import '../../css/u/u_-d_vaka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqn8gqb4e"/><path class="m-ue7vdss"/><path class="u_-d_vaka"/>`,
		"fallback": "energy-icons:box-20",
	});
}

export default Component;
