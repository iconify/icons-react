import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egc-prmmk.css';
import '../../css/y/y4_kabc3w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="egc-prmmk"/><path class="y4_kabc3w"/>`,
		"fallback": "lsicon:file-movie-filled",
	});
}

export default Component;
