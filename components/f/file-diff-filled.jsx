import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrsb5o73i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrsb5o73i"/>`,
		"fallback": "lucide-extended:file-diff-filled",
	});
}

export default Component;
