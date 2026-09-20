import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju4ghls-w.css';
import '../../css/a/aegljw1gn.css';
import '../../css/c/c5qc64bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju4ghls-w"/><path class="aegljw1gn"/><path class="c5qc64bra"/>`,
		"fallback": "pixel:face-heart-eyes",
	});
}

export default Component;
