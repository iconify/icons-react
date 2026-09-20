import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/itd3yqb5q.css';
import '../../css/y/ykedzbc5a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="itd3yqb5q"/><path class="ykedzbc5a"/></g>`,
		"fallback": "streamline-color:dangerous-zone-sign-flat",
	});
}

export default Component;
