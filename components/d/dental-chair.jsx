import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yf1-o6bau.css';
import '../../css/o/om6jlvbgh.css';
import '../../css/t/to8n_3bic.css';
import '../../css/b/bh4qffbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k yf1-o6bau"/><path class="om6jlvbgh wm-a"/><path class="to8n_3bic"/><path class="bh4qffbcj"/></g>`,
		"fallback": "withicons-bauhaus:dental-chair",
	});
}

export default Component;
