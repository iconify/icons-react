import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q4mrgqbwf.css';
import '../../css/y/yh8tkpfwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q4mrgqbwf"/><path class="yh8tkpfwd"/></g>`,
		"fallback": "streamline-sharp-color:insert-cloud-link-flat",
	});
}

export default Component;
