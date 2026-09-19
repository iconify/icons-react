import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja8d0ui8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja8d0ui8v"/>`,
		"fallback": "fa6-regular:face-frown",
	});
}

export default Component;
