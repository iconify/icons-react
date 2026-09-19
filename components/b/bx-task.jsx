import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z53litb-a.css';
import '../../css/b/bp0qj4bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z53litb-a"/><path class="bp0qj4bzt"/>`,
		"fallback": "bx:bx-task",
	});
}

export default Component;
