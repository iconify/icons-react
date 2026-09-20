import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghnaq34ib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghnaq34ib"/>`,
		"fallback": "streamline-block:drink-food-meat",
	});
}

export default Component;
