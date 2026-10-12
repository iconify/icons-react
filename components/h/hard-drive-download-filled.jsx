import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg_u039uv.css';
import '../../css/e/e0kfvbb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hg_u039uv"/><path class="e0kfvbb2z"/>`,
		"fallback": "lucide-extended:hard-drive-download-filled",
	});
}

export default Component;
