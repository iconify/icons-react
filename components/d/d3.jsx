import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp7dyqbjq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp7dyqbjq"/>`,
		"fallback": "file-icons:d3",
	});
}

export default Component;
