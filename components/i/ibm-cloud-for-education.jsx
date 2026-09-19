import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-r4rkboe.css';
import '../../css/x/xyuv38bch.css';
import '../../css/v/vi1bm7b1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-r4rkboe"/><path class="xyuv38bch"/><path class="vi1bm7b1k"/>`,
		"fallback": "carbon:ibm-cloud-for-education",
	});
}

export default Component;
