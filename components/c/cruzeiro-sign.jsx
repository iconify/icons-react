import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb73kvbog.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb73kvbog"/>`,
		"fallback": "fa7-solid:cruzeiro-sign",
	});
}

export default Component;
