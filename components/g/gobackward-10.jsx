import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy4mpxe2x.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy4mpxe2x"/>`,
		"fallback": "f7:gobackward-10",
	});
}

export default Component;
