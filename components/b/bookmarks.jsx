import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn1vx7i1f.css';
import '../../css/b/bfpgpzbzd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn1vx7i1f"/><path class="bfpgpzbzd"/>`,
		"fallback": "famicons:bookmarks",
	});
}

export default Component;
