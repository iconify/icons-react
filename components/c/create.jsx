import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxwa51bzx.css';
import '../../css/l/l7ztl2cyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxwa51bzx"/><path class="l7ztl2cyr"/>`,
		"fallback": "gridicons:create",
	});
}

export default Component;
