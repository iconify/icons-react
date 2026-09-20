import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi55qob3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xi55qob3w"/>`,
		"fallback": "ix:info-multiple-filled",
	});
}

export default Component;
