import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocxedjb1h.css';
import '../../css/h/hh28l1bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocxedjb1h"/><path class="hh28l1bxu"/>`,
		"fallback": "stash:image-search",
	});
}

export default Component;
