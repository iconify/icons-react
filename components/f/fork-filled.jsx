import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhzzqd1cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhzzqd1cc"/>`,
		"fallback": "tdesign:fork-filled",
	});
}

export default Component;
