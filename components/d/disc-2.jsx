import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/o/o3t_kjb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><circle class="aqhok2bbj"/><path class="o3t_kjb7a"/></g>`,
		"fallback": "hugeicons:disc-2",
	});
}

export default Component;
