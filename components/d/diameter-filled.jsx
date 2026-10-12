import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hce5xfkpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hce5xfkpw"/>`,
		"fallback": "lucide-extended:diameter-filled",
	});
}

export default Component;
