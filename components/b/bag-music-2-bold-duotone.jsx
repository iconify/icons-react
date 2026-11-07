import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7-h_b7c.css';
import '../../css/d/drkgosb6q.css';
import '../../css/e/eq2j71b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li7-h_b7c"/><path clip-rule="evenodd" class="drkgosb6q"/><path class="eq2j71b9x"/>`,
		"fallback": "solar:bag-music-2-bold-duotone",
	});
}

export default Component;
