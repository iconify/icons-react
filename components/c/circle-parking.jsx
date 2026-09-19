import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/t/t_kxb1bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><path class="t_kxb1bqe"/></g>`,
		"fallback": "hugeicons:circle-parking",
	});
}

export default Component;
