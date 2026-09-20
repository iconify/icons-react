import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgf7mtbad.css';
import '../../css/v/voqab9-af.css';
import '../../css/c/cr1n-jbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgf7mtbad"/><path class="voqab9-af"/><path class="cr1n-jbhm"/></g>`,
		"fallback": "streamline-ultimate-color:delete-2",
	});
}

export default Component;
