import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6gff_n3z.css';
import '../../css/p/pnvwxie9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6gff_n3z"/><path class="pnvwxie9u"/>`,
		"fallback": "selfhst:garage",
	});
}

export default Component;
