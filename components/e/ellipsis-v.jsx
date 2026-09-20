import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf11exb8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf11exb8h"/>`,
		"fallback": "pajamas:ellipsis-v",
	});
}

export default Component;
