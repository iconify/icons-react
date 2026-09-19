import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpd2i7b0i.css';
import '../../css/t/th-zvacct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpd2i7b0i"/><path class="th-zvacct"/>`,
		"fallback": "file-icons:hashicorp",
	});
}

export default Component;
