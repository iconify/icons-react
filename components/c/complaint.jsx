import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oagawgbbv.css';
import '../../css/o/olpgfdb0y.css';
import '../../css/o/olyxe4bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oagawgbbv"/><path class="olpgfdb0y"/><path class="olyxe4bhs"/></g>`,
		"fallback": "hugeicons:complaint",
	});
}

export default Component;
