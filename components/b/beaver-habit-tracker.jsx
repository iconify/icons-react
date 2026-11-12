import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwvjmvb6c.css';
import '../../css/o/ogd77sb1i.css';
import '../../css/g/g4-80-g_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwvjmvb6c"/><path class="ogd77sb1i"/><path class="g4-80-g_f"/>`,
		"fallback": "selfhst:beaver-habit-tracker",
	});
}

export default Component;
