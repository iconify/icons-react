import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e620dkb5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e620dkb5a"/>`,
		"fallback": "lsicon:clear-filled",
	});
}

export default Component;
