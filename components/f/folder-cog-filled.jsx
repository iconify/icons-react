import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auxij4h6f.css';
import '../../css/k/k9isiyb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="auxij4h6f"/><path class="k9isiyb7r"/>`,
		"fallback": "lucide-extended:folder-cog-filled",
	});
}

export default Component;
