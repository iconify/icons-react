import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt7xtbczv.css';
import '../../css/f/fqgt3213z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt7xtbczv"/><path class="fqgt3213z"/>`,
		"fallback": "thesvg-color:5dive",
	});
}

export default Component;
