import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuobntlfo.css';
import '../../css/r/r8h9qdcac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuobntlfo"/><path clip-rule="evenodd" class="r8h9qdcac"/>`,
		"fallback": "solar:archive-up-minimlistic-outline",
	});
}

export default Component;
