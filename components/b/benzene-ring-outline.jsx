import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ugcyjie.css';
import '../../css/a/al80obcvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ugcyjie"/><path clip-rule="evenodd" class="al80obcvo"/>`,
		"fallback": "solar:benzene-ring-outline",
	});
}

export default Component;
