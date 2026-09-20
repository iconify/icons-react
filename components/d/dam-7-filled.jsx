import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3kws5b8f.css';
import '../../css/r/rqm0q0u6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3kws5b8f"/><path class="rqm0q0u6i"/>`,
		"fallback": "tdesign:dam-7-filled",
	});
}

export default Component;
