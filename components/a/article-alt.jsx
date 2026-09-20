import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxd-8e_9n.css';
import '../../css/t/tlplblg9a.css';
import '../../css/h/hse9jrbcs.css';
import '../../css/u/ucf26ob4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxd-8e_9n"/><path class="tlplblg9a"/><path clip-rule="evenodd" class="hse9jrbcs"/><path class="ucf26ob4c"/>`,
		"fallback": "stash:article-alt",
	});
}

export default Component;
