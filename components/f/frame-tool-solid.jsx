import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/okvwpgter.css';
import '../../css/i/ilcck20km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="okvwpgter"/><path class="ilcck20km"/></g>`,
		"fallback": "iconoir:frame-tool-solid",
	});
}

export default Component;
