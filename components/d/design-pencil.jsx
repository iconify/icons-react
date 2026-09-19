import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4tanacyw.css';
import '../../css/n/n5b386o7f.css';
import '../../css/j/johtebc_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4tanacyw"/><path class="n5b386o7f"/><path class="johtebc_h"/></g>`,
		"fallback": "iconoir:design-pencil",
	});
}

export default Component;
