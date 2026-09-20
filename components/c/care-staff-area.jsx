import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae6uv7dgk.css';
import '../../css/b/bkulhccha.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae6uv7dgk"/><path class="bkulhccha"/>`,
		"fallback": "medical-icon:care-staff-area",
	});
}

export default Component;
