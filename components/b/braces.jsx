import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_y4-6bvi.css';
import '../../css/v/va16dh44j.css';
import '../../css/l/lxbf6jb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_y4-6bvi wm-shadow"/><path class="va16dh44j wm-k"/><path class="lxbf6jb8n wm-k"/>`,
		"fallback": "withicons-pastel:braces",
	});
}

export default Component;
