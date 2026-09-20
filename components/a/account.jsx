import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/ehh26n.css';
import '../../css/a/asf8ox.css';
import '../../css/s/so-from-28.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ehh26n"/><path class="a0m25c asf8ox"/>`,
		"fallback": "line-md:account",
	});
}

export default Component;
