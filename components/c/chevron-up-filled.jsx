import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2vtr0hjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2vtr0hjq"/>`,
		"fallback": "griddy-icons:chevron-up-filled",
	});
}

export default Component;
