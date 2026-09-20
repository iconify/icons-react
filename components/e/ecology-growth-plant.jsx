import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v70-wlb8m.css';
import '../../css/p/p2ucjgbkj.css';
import '../../css/p/peoklab8z.css';
import '../../css/c/csxdllvzu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v70-wlb8m"/><path class="p2ucjgbkj"/><path class="peoklab8z"/><path class="csxdllvzu"/>`,
		"fallback": "streamline-pixel:ecology-growth-plant",
	});
}

export default Component;
