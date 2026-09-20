import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6hs4ob5h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v6hs4ob5h"/>`,
		"fallback": "lsicon:constitute-filled",
	});
}

export default Component;
