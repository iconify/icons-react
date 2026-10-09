import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3-_lcbqm.css';
import '../../css/w/w9b7p7brw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3-_lcbqm"/><path class="w9b7p7brw"/>`,
		"fallback": "energy-icons:handshake-20",
	});
}

export default Component;
