import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsfo1ib2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsfo1ib2j"/>`,
		"fallback": "lucide-extended:cloud-sun-filled",
	});
}

export default Component;
