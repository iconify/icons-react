import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooj2r_z4l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooj2r_z4l"/>`,
		"fallback": "ant-design:caret-left-outlined",
	});
}

export default Component;
