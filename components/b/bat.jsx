import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1m5ykyav.css';
import '../../css/u/uylh2bc2i.css';
import '../../css/w/wuyl63pyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1m5ykyav wm-k"/><path class="uylh2bc2i wm-a"/><path class="wm-a wuyl63pyc"/>`,
		"fallback": "withicons-bauhaus:bat",
	});
}

export default Component;
