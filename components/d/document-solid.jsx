import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry01f3xip.css';
import '../../css/a/a4jsaxbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ry01f3xip"/><path class="a4jsaxbri"/>`,
		"fallback": "basil:document-solid",
	});
}

export default Component;
