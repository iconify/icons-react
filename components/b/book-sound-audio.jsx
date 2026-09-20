import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbpj61t4x.css';
import '../../css/m/m68w6s2bk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbpj61t4x"/><path class="m68w6s2bk"/>`,
		"fallback": "streamline-freehand:book-sound-audio",
	});
}

export default Component;
