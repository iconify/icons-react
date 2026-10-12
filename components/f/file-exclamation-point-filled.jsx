import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klzrc_ihu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="klzrc_ihu"/>`,
		"fallback": "lucide-extended:file-exclamation-point-filled",
	});
}

export default Component;
