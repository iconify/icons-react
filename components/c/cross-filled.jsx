import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv5e8ydir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv5e8ydir"/>`,
		"fallback": "tabler:cross-filled",
	});
}

export default Component;
