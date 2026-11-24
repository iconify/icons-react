import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gotpsbcpu.css';
import '../../css/w/wxtz8objy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gotpsbcpu"/><path class="wxtz8objy"/>`,
		"fallback": "lucide-extended:flashlight-off-filled",
	});
}

export default Component;
