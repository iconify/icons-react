import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol05o0b3n.css';
import '../../css/b/buewkbcgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol05o0b3n"/><path clip-rule="evenodd" class="buewkbcgq"/>`,
		"fallback": "basil:cancel-outline",
	});
}

export default Component;
