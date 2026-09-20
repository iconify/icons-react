import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0vnwtjwz.css';
import '../../css/z/z59h9eb2b.css';
import '../../css/d/dtvaixlap.css';
import '../../css/a/a3dmwqb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0vnwtjwz"/><path class="z59h9eb2b"/><path class="dtvaixlap"/><path class="a3dmwqb8c"/>`,
		"fallback": "streamline-ultimate:delivery-truck-clock-bold",
	});
}

export default Component;
