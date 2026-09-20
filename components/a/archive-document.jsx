import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkoy5f77i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nkoy5f77i"/>`,
		"fallback": "ix:archive-document",
	});
}

export default Component;
