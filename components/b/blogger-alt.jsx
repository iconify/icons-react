import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_uuu056f.css';
import '../../css/q/qdis4za-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_uuu056f"/><path class="qdis4za-b"/>`,
		"fallback": "uim:blogger-alt",
	});
}

export default Component;
