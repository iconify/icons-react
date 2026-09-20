import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbitgnb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbitgnb_h"/>`,
		"fallback": "tabler:clock-hour-6",
	});
}

export default Component;
