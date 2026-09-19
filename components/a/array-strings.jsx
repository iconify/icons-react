import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0ole3zzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0ole3zzb"/>`,
		"fallback": "carbon:array-strings",
	});
}

export default Component;
