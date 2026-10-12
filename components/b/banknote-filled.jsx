import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufmb-0o7z.css';
import '../../css/h/hbrz9e2ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufmb-0o7z"/><path clip-rule="evenodd" class="hbrz9e2ks"/>`,
		"fallback": "lucide-extended:banknote-filled",
	});
}

export default Component;
