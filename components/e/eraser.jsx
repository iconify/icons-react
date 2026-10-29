import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jom3tejxu.css';
import '../../css/k/k9315ht5u.css';
import '../../css/x/x9o9b89sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jom3tejxu wm-a"/><path class="k9315ht5u wm-k"/><path class="wm-k x9o9b89sz"/>`,
		"fallback": "withicons-bauhaus:eraser",
	});
}

export default Component;
