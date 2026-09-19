import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqf2av3eh.css';
import '../../css/f/fs-22ozdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqf2av3eh"/><path class="fs-22ozdv"/>`,
		"fallback": "carbon:drink-01",
	});
}

export default Component;
