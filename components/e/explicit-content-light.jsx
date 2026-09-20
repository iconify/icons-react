import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6mnyfb7a.css';
import '../../css/a/a1wks9bmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6mnyfb7a"/><path class="a1wks9bmb"/></g>`,
		"fallback": "stash:explicit-content-light",
	});
}

export default Component;
