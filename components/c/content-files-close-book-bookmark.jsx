import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4ctvfujo.css';
import '../../css/q/q00bcy-qc.css';
import '../../css/j/jv2czo-4r.css';
import '../../css/z/z8onmlb3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4ctvfujo"/><path class="q00bcy-qc"/><path class="jv2czo-4r"/><path class="z8onmlb3e"/>`,
		"fallback": "streamline-pixel:content-files-close-book-bookmark",
	});
}

export default Component;
