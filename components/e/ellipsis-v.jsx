import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kca43ld9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kca43ld9t"/>`,
		"fallback": "uit:ellipsis-v",
	});
}

export default Component;
