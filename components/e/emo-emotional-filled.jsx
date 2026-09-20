import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i53ry7bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i53ry7bwk"/>`,
		"fallback": "tdesign:emo-emotional-filled",
	});
}

export default Component;
