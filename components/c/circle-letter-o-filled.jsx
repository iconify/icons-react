import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn62sxfmg.css';
import '../../css/q/ql32cplmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn62sxfmg"/><path clip-rule="evenodd" class="ql32cplmr"/>`,
		"fallback": "lucide-extended:circle-letter-o-filled",
	});
}

export default Component;
