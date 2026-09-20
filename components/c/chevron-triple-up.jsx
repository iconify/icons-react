import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/koytqz.css';
import '../../css/w/wre3wa.css';
import '../../css/g/gw0cej.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c koytqz"/><path class="a0m25c wre3wa"/><path class="a0m25c gw0cej"/>`,
		"fallback": "line-md:chevron-triple-up",
	});
}

export default Component;
