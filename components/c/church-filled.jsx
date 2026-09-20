import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-ggtpb7h.css';
import '../../css/o/ojum2hmgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-ggtpb7h"/><path class="ojum2hmgf"/>`,
		"fallback": "tdesign:church-filled",
	});
}

export default Component;
