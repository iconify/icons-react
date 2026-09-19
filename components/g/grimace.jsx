import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eod_tkbqu.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eod_tkbqu"/>`,
		"fallback": "fa-regular:grimace",
	});
}

export default Component;
