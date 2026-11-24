import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8b33yeif.css';
import '../../css/v/v7fiiyb4p.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8b33yeif"/><path clip-rule="evenodd" class="v7fiiyb4p"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-badge-filled",
	});
}

export default Component;
