import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8_fq-bqw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8_fq-bqw"/>`,
		"fallback": "bi:box-seam",
	});
}

export default Component;
