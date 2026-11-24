import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_mguhhan.css';
import '../../css/z/z5f1labnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_mguhhan"/><path class="z5f1labnz"/>`,
		"fallback": "lucide-extended:cloud-lightning-filled",
	});
}

export default Component;
