import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3__ojbef.css';
import '../../css/d/dwrhhxelk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3__ojbef"/><path clip-rule="evenodd" class="dwrhhxelk"/>`,
		"fallback": "lucide-extended:circle-letter-q-filled",
	});
}

export default Component;
