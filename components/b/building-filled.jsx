import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlmneqbga.css';
import '../../css/o/o5_ykjx1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rlmneqbga"/><path class="o5_ykjx1c"/>`,
		"fallback": "lucide-extended:building-filled",
	});
}

export default Component;
