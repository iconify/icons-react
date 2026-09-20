import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm02v-bqq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm02v-bqq"/>`,
		"fallback": "lsicon:batch-add-outline",
	});
}

export default Component;
