import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdx__9a1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdx__9a1f"/>`,
		"fallback": "carbon:direction-merge-left-filled",
	});
}

export default Component;
