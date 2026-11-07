import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2nrf10bf.css';
import '../../css/w/waj24z7nm.css';
import '../../css/q/qv7m4ujqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2nrf10bf"/><path clip-rule="evenodd" class="waj24z7nm"/><path clip-rule="evenodd" class="qv7m4ujqw"/>`,
		"fallback": "solar:folder-zip-bold-duotone",
	});
}

export default Component;
