import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt2b5di-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pt2b5di-v"/>`,
		"fallback": "ix:add-circle-small-filled",
	});
}

export default Component;
