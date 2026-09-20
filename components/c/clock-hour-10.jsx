import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrbc_pbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrbc_pbor"/>`,
		"fallback": "tabler:clock-hour-10",
	});
}

export default Component;
