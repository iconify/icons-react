import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ef8rbjx.css';
import '../../css/w/w-uou4yhx.css';
import '../../css/o/o-1wmqb9z.css';
import '../../css/y/yb1t-pwor.css';
import '../../css/s/s6qd-zbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7ef8rbjx"/><path class="w-uou4yhx"/><path class="o-1wmqb9z"/><path class="yb1t-pwor"/><path class="s6qd-zbqk"/>`,
		"fallback": "solar:card-transfer-bold-duotone",
	});
}

export default Component;
