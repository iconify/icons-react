import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzb_9rbom.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzb_9rbom"/>`,
		"fallback": "f7:bell-circle-fill",
	});
}

export default Component;
