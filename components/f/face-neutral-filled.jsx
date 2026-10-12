import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l43uzl-6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l43uzl-6a"/>`,
		"fallback": "lucide-extended:face-neutral-filled",
	});
}

export default Component;
