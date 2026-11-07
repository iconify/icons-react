import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si5z23b4a.css';
import '../../css/b/b17et-bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si5z23b4a"/><path clip-rule="evenodd" class="b17et-bkr"/>`,
		"fallback": "solar:dumbbell-large-minimalistic-bold",
	});
}

export default Component;
