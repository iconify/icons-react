import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn2pokbmn.css';
import '../../css/x/x83nf7g0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn2pokbmn"/><path class="x83nf7g0i"/>`,
		"fallback": "lucide-extended:cloud-upload-filled",
	});
}

export default Component;
