import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0jw2wlab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i0jw2wlab"/>`,
		"fallback": "ix:emote-neutral-filled",
	});
}

export default Component;
