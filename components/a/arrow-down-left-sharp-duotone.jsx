import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/beg17-bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="beg17-bgm"/>`,
		"fallback": "keyline-icons:arrow-down-left-sharp-duotone",
	});
}

export default Component;
