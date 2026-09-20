import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkh7_fb1y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gkh7_fb1y"/>`,
		"fallback": "streamline:google-drive-solid",
	});
}

export default Component;
