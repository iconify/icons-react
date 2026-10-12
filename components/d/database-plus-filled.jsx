import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq2lgwsyv.css';
import '../../css/y/yismpnbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq2lgwsyv"/><path class="yismpnbbv"/>`,
		"fallback": "lucide-extended:database-plus-filled",
	});
}

export default Component;
