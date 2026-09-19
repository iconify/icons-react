import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si0jw2byf.css';
import '../../css/r/r7dafkb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si0jw2byf"/><path class="r7dafkb_q"/>`,
		"fallback": "famicons:bookmarks-sharp",
	});
}

export default Component;
