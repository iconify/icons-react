import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo43we00a.css';
import '../../css/x/x-qzpu1sw.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo43we00a"/><path class="x-qzpu1sw"/><path class="c4946-17v"/>`,
		"fallback": "solar:clipboard-remove-bold-duotone",
	});
}

export default Component;
