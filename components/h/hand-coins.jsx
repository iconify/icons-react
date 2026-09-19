import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o79j5mb4a.css';
import '../../css/s/sb8342bfd.css';
import '../../css/c/csq3qnmej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o79j5mb4a"/><path class="sb8342bfd"/><circle class="csq3qnmej"/></g>`,
		"fallback": "hugeicons:hand-coins",
	});
}

export default Component;
