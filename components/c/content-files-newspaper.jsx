import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkms2ybtu.css';
import '../../css/f/fw-p8rb7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkms2ybtu"/><path class="fw-p8rb7b"/>`,
		"fallback": "streamline-pixel:content-files-newspaper",
	});
}

export default Component;
