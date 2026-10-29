import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3gm-abug.css';
import '../../css/g/gxgk1_b8t.css';
import '../../css/m/mbzw4qy1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3gm-abug wm-k"/><path class="gxgk1_b8t wm-s"/><path class="mbzw4qy1w wm-s"/>`,
		"fallback": "withicons-bauhaus:eye-off",
	});
}

export default Component;
