import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf7uc5zzl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf7uc5zzl"/>`,
		"fallback": "zondicons:inbox-download",
	});
}

export default Component;
