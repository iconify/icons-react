import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muotlpbym.css';
import '../../css/w/ws98rr2bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muotlpbym"/><path clip-rule="evenodd" class="ws98rr2bv"/>`,
		"fallback": "lucide-extended:boom-box-filled",
	});
}

export default Component;
