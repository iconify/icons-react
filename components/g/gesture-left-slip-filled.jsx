import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ont_ilb1y.css';
import '../../css/u/ua3nsqb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ont_ilb1y"/><path class="ua3nsqb7g"/>`,
		"fallback": "tdesign:gesture-left-slip-filled",
	});
}

export default Component;
