import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oos4n-2so.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oos4n-2so"/>`,
		"fallback": "fa6-solid:hill-rockslide",
	});
}

export default Component;
