import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl8_zgbvz.css';
import '../../css/o/o5nyr_biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pl8_zgbvz"/><path class="o5nyr_biv"/>`,
		"fallback": "lucide-extended:hand-platter-filled",
	});
}

export default Component;
