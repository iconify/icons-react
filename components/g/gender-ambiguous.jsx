import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkxvn8bbt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkxvn8bbt"/>`,
		"fallback": "bi:gender-ambiguous",
	});
}

export default Component;
