import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8o7tqwml.css';
import '../../css/d/d-cv43blx.css';
import '../../css/e/et53a2b1s.css';
import '../../css/m/mxgqkob2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8o7tqwml"/><path clip-rule="evenodd" class="d-cv43blx"/><path class="et53a2b1s"/><path class="mxgqkob2w"/>`,
		"fallback": "token:cbx",
	});
}

export default Component;
