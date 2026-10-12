import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2l34ybtf.css';
import '../../css/j/j8cdfd2tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2l34ybtf"/><path class="j8cdfd2tz"/>`,
		"fallback": "lucide-extended:biohazard-filled",
	});
}

export default Component;
