import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7p_66uvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7p_66uvv"/>`,
		"fallback": "tabler:device-watch-flame",
	});
}

export default Component;
