import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz0t0xciq.css';
import '../../css/u/umqjyb9su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz0t0xciq wm-k"/><path class="umqjyb9su wm-a"/>`,
		"fallback": "withicons-bauhaus:arrow-down-left",
	});
}

export default Component;
