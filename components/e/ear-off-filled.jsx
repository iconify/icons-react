import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7sy6m7uh.css';
import '../../css/t/tegin3b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7sy6m7uh"/><path class="tegin3b-f"/>`,
		"fallback": "lucide-extended:ear-off-filled",
	});
}

export default Component;
