import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz238-fks.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz238-fks"/>`,
		"fallback": "selfhst:audiobookshelf-dark",
	});
}

export default Component;
