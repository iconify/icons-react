import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-m7aobza.css';
import '../../css/f/fldmn0cpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b o-m7aobza"/><path class="b fldmn0cpz"/>`,
		"fallback": "boxicons:education-filled",
	});
}

export default Component;
