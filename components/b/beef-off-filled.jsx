import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsujivkiy.css';
import '../../css/v/vo9bl5pgd.css';
import '../../css/t/tz7299b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vsujivkiy"/><path class="vo9bl5pgd"/><path class="tz7299b0o"/>`,
		"fallback": "lucide-extended:beef-off-filled",
	});
}

export default Component;
