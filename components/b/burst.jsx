import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzz-pgc8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzz-pgc8k"/>`,
		"fallback": "fa6-solid:burst",
	});
}

export default Component;
