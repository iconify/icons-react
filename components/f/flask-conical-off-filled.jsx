import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqp8j6bvf.css';
import '../../css/m/mjdzrmbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqp8j6bvf"/><path class="mjdzrmbys"/>`,
		"fallback": "lucide-extended:flask-conical-off-filled",
	});
}

export default Component;
