import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0ennjy9f.css';
import '../../css/a/a446ljbdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0ennjy9f"/><path clip-rule="evenodd" class="a446ljbdh"/>`,
		"fallback": "stash:drag-squares-horizontal-duotone",
	});
}

export default Component;
