import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy5i8ob_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy5i8ob_k"/>`,
		"fallback": "coolicons:files-fill-round",
	});
}

export default Component;
