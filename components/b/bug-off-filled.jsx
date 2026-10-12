import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5cvq3b4h.css';
import '../../css/i/iv92ody-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x5cvq3b4h"/><path class="iv92ody-l"/>`,
		"fallback": "lucide-extended:bug-off-filled",
	});
}

export default Component;
