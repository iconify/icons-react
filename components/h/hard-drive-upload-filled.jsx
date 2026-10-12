import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg_u039uv.css';
import '../../css/e/e2m_lkbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hg_u039uv"/><path class="e2m_lkbvn"/>`,
		"fallback": "lucide-extended:hard-drive-upload-filled",
	});
}

export default Component;
