import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bttm99b0u.css';
import '../../css/a/a6m8tsd_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bttm99b0u duoicon-primary-layer"/><path class="a6m8tsd_d duoicon-secondary-layer"/>`,
		"fallback": "duo-icons:computer-camera-off",
	});
}

export default Component;
