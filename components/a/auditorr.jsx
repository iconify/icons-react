import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7audcctd.css';
import '../../css/p/pah233ash.css';
import '../../css/w/whx3_cfkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7audcctd"/><path class="pah233ash"/><path class="whx3_cfkf"/>`,
		"fallback": "selfhst:auditorr",
	});
}

export default Component;
