import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-jh1-4ax.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-jh1-4ax"/>`,
		"fallback": "fluent-mdl2:checked-out-by-other-12",
	});
}

export default Component;
