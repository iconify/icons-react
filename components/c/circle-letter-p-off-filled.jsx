import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qevsu6brs.css';
import '../../css/w/wfk--dl3u.css';
import '../../css/v/vgshsqbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qevsu6brs"/><path class="wfk--dl3u"/><path class="vgshsqbxt"/>`,
		"fallback": "lucide-extended:circle-letter-p-off-filled",
	});
}

export default Component;
