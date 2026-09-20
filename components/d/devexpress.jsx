import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfdz_fw0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfdz_fw0l"/>`,
		"fallback": "thesvg-color:devexpress",
	});
}

export default Component;
