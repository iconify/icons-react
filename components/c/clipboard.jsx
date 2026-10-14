import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kgr9tlfkg.css';
import '../../css/w/wuqzapgad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kgr9tlfkg"/><path class="wuqzapgad"/></g>`,
		"fallback": "matita:clipboard",
	});
}

export default Component;
