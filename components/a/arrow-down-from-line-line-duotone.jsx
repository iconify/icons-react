import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zrpg8lbei.css';
import '../../css/i/i-ia5xbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zrpg8lbei"/><path class="i-ia5xbri"/></g>`,
		"fallback": "solar:arrow-down-from-line-line-duotone",
	});
}

export default Component;
