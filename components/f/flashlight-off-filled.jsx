import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7onacbub.css';
import '../../css/f/f6gjy-b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x7onacbub"/><path class="f6gjy-b9n"/>`,
		"fallback": "lucide-extended:flashlight-off-filled",
	});
}

export default Component;
