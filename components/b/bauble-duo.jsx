import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kmwml-5pk.css';
import '../../css/g/gz5q0zrux.css';
import '../../css/l/ln4xjrx4e.css';
import '../../css/x/x4e1woonj.css';
import '../../css/o/oobzc-77t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kmwml-5pk"/><path class="gz5q0zrux wm-a"/><path class="ln4xjrx4e wm-a"/><path class="x4e1woonj"/><path class="oobzc-77t wm-a"/></g>`,
		"fallback": "withicons:bauble-duo",
	});
}

export default Component;
