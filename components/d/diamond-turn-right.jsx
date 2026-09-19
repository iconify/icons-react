import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb2keo2id.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tb2keo2id"/>`,
		"fallback": "fa6-solid:diamond-turn-right",
	});
}

export default Component;
