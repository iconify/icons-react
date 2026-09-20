import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh821mhzp.css';
import '../../css/k/kidrbbcux.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh821mhzp"/><path class="kidrbbcux"/>`,
		"fallback": "nimbus:edit",
	});
}

export default Component;
