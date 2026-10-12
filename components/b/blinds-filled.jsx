import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stdr-7bvd.css';
import '../../css/z/zt9l85bje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stdr-7bvd"/><path class="zt9l85bje"/>`,
		"fallback": "lucide-extended:blinds-filled",
	});
}

export default Component;
