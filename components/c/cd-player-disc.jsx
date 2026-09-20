import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pw8owgtbs.css';
import '../../css/t/tvp1jib9y.css';
import '../../css/r/roucdszvd.css';
import '../../css/s/sgw5l6b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pw8owgtbs"/><path class="tvp1jib9y"/><path class="roucdszvd"/><path class="sgw5l6b8j"/></g>`,
		"fallback": "streamline-freehand-color:cd-player-disc",
	});
}

export default Component;
