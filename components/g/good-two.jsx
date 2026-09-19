import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i55nj8tdo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i55nj8tdo"/>`,
		"fallback": "icon-park-solid:good-two",
	});
}

export default Component;
