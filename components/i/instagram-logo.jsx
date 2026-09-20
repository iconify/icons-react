import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpqnhmtil.css';
import '../../css/x/x42oxcctk.css';
import '../../css/h/hwh4m4bbc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpqnhmtil"/><path clip-rule="evenodd" class="x42oxcctk"/><path clip-rule="evenodd" class="hwh4m4bbc"/>`,
		"fallback": "ix:instagram-logo",
	});
}

export default Component;
