import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfljiac2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfljiac2y"/>`,
		"fallback": "thesvg-color:google-jules",
	});
}

export default Component;
