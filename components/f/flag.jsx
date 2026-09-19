import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge7rpwnsu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge7rpwnsu"/>`,
		"fallback": "fa6-solid:flag",
	});
}

export default Component;
