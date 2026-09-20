import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-9okypbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-9okypbt"/>`,
		"fallback": "pixel:google",
	});
}

export default Component;
