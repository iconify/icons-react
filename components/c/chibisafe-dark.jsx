import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnm87zbsi.css';
import '../../css/j/jpb4tzbtj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnm87zbsi"/><path class="jpb4tzbtj"/>`,
		"fallback": "selfhst:chibisafe-dark",
	});
}

export default Component;
