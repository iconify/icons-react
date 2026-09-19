import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2ly39s3b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2ly39s3b"/>`,
		"fallback": "fa7-solid:calendar-xmark",
	});
}

export default Component;
