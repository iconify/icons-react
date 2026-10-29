import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw83z9b-r.css';
import '../../css/t/t9-82h_yw.css';
import '../../css/j/j0c-zxbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k zw83z9b-r"/><path class="t9-82h_yw wm-k"/><path class="j0c-zxbrk wm-a"/>`,
		"fallback": "withicons-bauhaus:indent-decrease",
	});
}

export default Component;
