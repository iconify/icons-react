import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f5z5fnbmg.css';
import '../../css/d/dry_c2c3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f5z5fnbmg"/><path class="dry_c2c3c"/></g>`,
		"fallback": "tabler:bookmarks-off",
	});
}

export default Component;
