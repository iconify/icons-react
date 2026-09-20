import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq-yaoy3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq-yaoy3s"/>`,
		"fallback": "thesvg:google-apps-script",
	});
}

export default Component;
