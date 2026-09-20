import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v0pnu-b7n.css';
import '../../css/q/q660pub5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v0pnu-b7n"/><path class="q660pub5r"/></g>`,
		"fallback": "streamline-sharp-color:browser-build-flat",
	});
}

export default Component;
