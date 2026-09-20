import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a09o_zzmo.css';
import '../../css/c/ckct19qqs.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a09o_zzmo"/><path class="ckct19qqs"/>`,
		"fallback": "lineicons:first-aid",
	});
}

export default Component;
