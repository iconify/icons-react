import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soai4mb4s.css';
import '../../css/z/zyhrf5vhp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soai4mb4s"/><path class="zyhrf5vhp"/>`,
		"fallback": "selfhst:1panel-light",
	});
}

export default Component;
