import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl-3szpmw.css';
import '../../css/g/g_0ul0b0z.css';
import '../../css/g/gnu88kuoj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl-3szpmw"/><path class="g_0ul0b0z"/><path class="gnu88kuoj"/>`,
		"fallback": "formkit:group",
	});
}

export default Component;
