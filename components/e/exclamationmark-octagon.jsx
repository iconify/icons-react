import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5d4tfb5o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5d4tfb5o"/>`,
		"fallback": "f7:exclamationmark-octagon",
	});
}

export default Component;
