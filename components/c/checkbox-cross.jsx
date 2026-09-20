import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr5jt2bje.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr5jt2bje"/>`,
		"fallback": "memory:checkbox-cross",
	});
}

export default Component;
