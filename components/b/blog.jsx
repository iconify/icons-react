import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gum_hnbos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gum_hnbos"/>`,
		"fallback": "fa6-solid:blog",
	});
}

export default Component;
