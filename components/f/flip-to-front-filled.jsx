import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfguy432a.css';
import '../../css/n/nhu-fkbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfguy432a"/><path class="nhu-fkbvy"/>`,
		"fallback": "tdesign:flip-to-front-filled",
	});
}

export default Component;
