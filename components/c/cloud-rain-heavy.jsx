import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z687y3m2i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z687y3m2i"/>`,
		"fallback": "bi:cloud-rain-heavy",
	});
}

export default Component;
