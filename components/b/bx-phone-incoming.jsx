import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qryyscb4x.css';
import '../../css/s/siitcdcqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qryyscb4x"/><path class="siitcdcqn"/>`,
		"fallback": "bx:bx-phone-incoming",
	});
}

export default Component;
