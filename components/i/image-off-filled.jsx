import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmc7v17rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmc7v17rt"/>`,
		"fallback": "tdesign:image-off-filled",
	});
}

export default Component;
