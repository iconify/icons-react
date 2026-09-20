import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfaej_b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfaej_b7a"/>`,
		"fallback": "ri:file-zip-line",
	});
}

export default Component;
