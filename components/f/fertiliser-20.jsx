import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukajkkbxj.css';
import '../../css/y/yep200xlu.css';
import '../../css/l/lem536b_l.css';
import '../../css/e/ee9mz4bdc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukajkkbxj"/><path class="yep200xlu"/><path class="lem536b_l"/><path class="ee9mz4bdc"/>`,
		"fallback": "energy-icons:fertiliser-20",
	});
}

export default Component;
