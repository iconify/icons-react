import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbxm3usqn.css';
import '../../css/l/lzg5bgbdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wbxm3usqn"/><path class="lzg5bgbdw"/>`,
		"fallback": "selfhst:dumbwhois",
	});
}

export default Component;
