import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuslflzdj.css';
import '../../css/b/bep1vk00f.css';
import '../../css/t/t1hj47b2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuslflzdj"/><path class="bep1vk00f"/><path class="t1hj47b2i"/>`,
		"fallback": "selfhst:dockflare-light",
	});
}

export default Component;
