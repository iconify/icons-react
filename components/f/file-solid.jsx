import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6xij5bwq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6xij5bwq"/>`,
		"fallback": "rivet-icons:file-solid",
	});
}

export default Component;
