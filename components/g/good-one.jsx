import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nea67geye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nea67geye"/>`,
		"fallback": "icon-park-solid:good-one",
	});
}

export default Component;
