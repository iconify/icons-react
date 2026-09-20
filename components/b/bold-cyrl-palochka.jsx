import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt6-dubor.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt6-dubor"/>`,
		"fallback": "ooui:bold-cyrl-palochka",
	});
}

export default Component;
