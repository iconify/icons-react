import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s77lopbsd.css';
import '../../css/a/ajx-gfbps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s77lopbsd"/><path class="ajx-gfbps"/>`,
		"fallback": "selfhst:filebrowser-quantum",
	});
}

export default Component;
