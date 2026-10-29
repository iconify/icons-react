import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_4rfcbog.css';
import '../../css/w/wdns6kbtq.css';
import '../../css/v/vzal-7s5b.css';
import '../../css/i/iyy2_-bjv.css';
import '../../css/v/vk5be2bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow y_4rfcbog"/><path class="wdns6kbtq wm-k"/><path class="vzal-7s5b wm-k"/><path class="iyy2_-bjv wm-a"/><path class="vk5be2bjs wm-a"/>`,
		"fallback": "withicons-pastel:crop",
	});
}

export default Component;
