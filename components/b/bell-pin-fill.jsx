import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp39-b6it.css';
import '../../css/f/f72i5tbxt.css';
import '../../css/k/kl2jsebar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xp39-b6it"/><path class="f72i5tbxt"/><circle class="kl2jsebar"/>`,
		"fallback": "lets-icons:bell-pin-fill",
	});
}

export default Component;
