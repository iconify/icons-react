import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk9yzt_fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk9yzt_fc"/>`,
		"fallback": "coolicons:face-neutral-fill-round",
	});
}

export default Component;
