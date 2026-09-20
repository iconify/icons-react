import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lg3oiabbn.css';
import '../../css/l/l41a-6b0f.css';
import '../../css/m/mow9f5btu.css';

const viewBox = {"width":55,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lg3oiabbn"/><path class="l41a-6b0f"/><path class="mow9f5btu"/></g>`,
		"fallback": "thesvg-color:cody",
	});
}

export default Component;
