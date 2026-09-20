import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abgiw5ybg.css';
import '../../css/o/o19_1sbli.css';
import '../../css/u/ucn7dybhs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abgiw5ybg"/><path class="o19_1sbli"/><path class="ucn7dybhs"/>`,
		"fallback": "streamline-pixel:ecology-windmill-1",
	});
}

export default Component;
