import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf0vkme-f.css';
import '../../css/j/jf67airfk.css';
import '../../css/t/t7vqv2dny.css';
import '../../css/u/u2_ol8b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf0vkme-f"/><path class="jf67airfk"/><path class="t7vqv2dny"/><path class="u2_ol8b5t"/>`,
		"fallback": "token:cirus",
	});
}

export default Component;
