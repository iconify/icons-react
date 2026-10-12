import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr8bbzbli.css';
import '../../css/l/lo4g9ospx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cr8bbzbli"/><path class="lo4g9ospx"/>`,
		"fallback": "lucide-extended:cake-filled",
	});
}

export default Component;
