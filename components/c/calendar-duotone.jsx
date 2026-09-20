import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmunasb2f.css';
import '../../css/w/w_bhenb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmunasb2f"/><path class="w_bhenb2n"/>`,
		"fallback": "stash:calendar-duotone",
	});
}

export default Component;
