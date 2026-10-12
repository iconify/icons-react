import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufmb-0o7z.css';
import '../../css/c/c3vmx5bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufmb-0o7z"/><path clip-rule="evenodd" class="c3vmx5bsx"/>`,
		"fallback": "lucide-extended:disc-filled",
	});
}

export default Component;
