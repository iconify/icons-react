import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz2i4y3pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wz2i4y3pg"/>`,
		"fallback": "lucide-extended:cone-filled",
	});
}

export default Component;
