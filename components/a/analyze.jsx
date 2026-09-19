import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul57thuxn.css';
import '../../css/f/fq0ccj7nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul57thuxn"/><path class="fq0ccj7nj"/>`,
		"fallback": "boxicons:analyze",
	});
}

export default Component;
