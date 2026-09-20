import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b5zbecbkl.css';
import '../../css/u/uobmsmb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b5zbecbkl"/><path class="uobmsmb7t"/></g>`,
		"fallback": "reicon:diploma-check-filled",
	});
}

export default Component;
