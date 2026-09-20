import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg_qtrbak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lg_qtrbak"/>`,
		"fallback": "qlementine-icons:funnel-16",
	});
}

export default Component;
