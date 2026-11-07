import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn-nc5ohr.css';
import '../../css/z/z5mu4-byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kn-nc5ohr"/><path class="z5mu4-byh"/>`,
		"fallback": "solar:compass-big-bold-duotone",
	});
}

export default Component;
