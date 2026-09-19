import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqv5m4zzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqv5m4zzb"/>`,
		"fallback": "icons8:bookmark",
	});
}

export default Component;
