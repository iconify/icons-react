import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g962xhd_j.css';
import '../../css/s/syrsg1b7q.css';
import '../../css/b/bgzw4_2lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g962xhd_j wm-k"/><path class="syrsg1b7q wm-k"/><path class="bgzw4_2lq wm-a"/>`,
		"fallback": "withicons-bauhaus:alert-triangle",
	});
}

export default Component;
