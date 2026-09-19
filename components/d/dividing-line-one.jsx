import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlwwdcsku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlwwdcsku"/>`,
		"fallback": "icon-park-outline:dividing-line-one",
	});
}

export default Component;
