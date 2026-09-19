import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd6labbqm.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd6labbqm"/>`,
		"fallback": "fa6-regular:file-powerpoint",
	});
}

export default Component;
