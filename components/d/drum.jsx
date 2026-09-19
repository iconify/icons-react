import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf4gl9b9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf4gl9b9a"/>`,
		"fallback": "fa6-solid:drum",
	});
}

export default Component;
