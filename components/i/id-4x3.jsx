import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-5uilbhv.css';
import '../../css/i/i2ddjlrtk.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-5uilbhv"/><path class="i2ddjlrtk"/>`,
		"fallback": "flag:id-4x3",
	});
}

export default Component;
