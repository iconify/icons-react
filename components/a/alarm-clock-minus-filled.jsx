import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rccdzuh8z.css';
import '../../css/d/du-r1xbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rccdzuh8z"/><path class="du-r1xbos"/>`,
		"fallback": "lucide-extended:alarm-clock-minus-filled",
	});
}

export default Component;
