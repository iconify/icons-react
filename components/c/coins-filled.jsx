import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s33pr9m8e.css';
import '../../css/d/df5dkmbjb.css';
import '../../css/b/by50vbcxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s33pr9m8e"/><path class="df5dkmbjb"/><path class="by50vbcxk"/>`,
		"fallback": "boxicons:coins-filled",
	});
}

export default Component;
