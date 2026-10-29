import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rus3__a3u.css';
import '../../css/c/cu3aa_zia.css';
import '../../css/y/yb6kx8bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rus3__a3u wm-k"/><path class="cu3aa_zia wm-k"/><path class="wm-a yb6kx8bsr"/>`,
		"fallback": "withicons-bauhaus:folder-minus",
	});
}

export default Component;
