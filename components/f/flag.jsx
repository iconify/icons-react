import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjvv51b2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjvv51b2p"/>`,
		"fallback": "entypo:flag",
	});
}

export default Component;
