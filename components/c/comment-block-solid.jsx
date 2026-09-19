import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt74trb9i.css';
import '../../css/f/fz-5llb7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rt74trb9i"/><path class="fz-5llb7t"/>`,
		"fallback": "basil:comment-block-solid",
	});
}

export default Component;
