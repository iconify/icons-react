import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5tuxwbnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5tuxwbnk"/>`,
		"fallback": "streamline:image-flash-2-flash-power-connect-charge-electricity-lightning",
	});
}

export default Component;
