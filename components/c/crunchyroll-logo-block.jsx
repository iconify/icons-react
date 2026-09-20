import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-_seqb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p-_seqb4c"/>`,
		"fallback": "streamline-logos:crunchyroll-logo-block",
	});
}

export default Component;
