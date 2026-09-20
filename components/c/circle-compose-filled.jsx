import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g89a7rrlp.css';
import '../../css/q/q5mx9-o-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g89a7rrlp"/><path class="q5mx9-o-p"/></g>`,
		"fallback": "reicon:circle-compose-filled",
	});
}

export default Component;
