import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvvdlbc1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvvdlbc1f"/>`,
		"fallback": "nrk:close",
	});
}

export default Component;
