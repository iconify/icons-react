import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9h_shb9i.css';
import '../../css/u/uz30z7t_j.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9h_shb9i"/><path clip-rule="evenodd" class="uz30z7t_j"/><path class="wm3j448rr"/>`,
		"fallback": "solar:file-cog-bold",
	});
}

export default Component;
