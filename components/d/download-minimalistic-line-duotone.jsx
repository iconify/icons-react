import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x8f9lbbka.css';
import '../../css/i/iah3itbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x8f9lbbka"/><path class="iah3itbam"/></g>`,
		"fallback": "solar:download-minimalistic-line-duotone",
	});
}

export default Component;
