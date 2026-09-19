import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzp4omb9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzp4omb9t"/>`,
		"fallback": "ion:bag-add",
	});
}

export default Component;
