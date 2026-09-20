import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wsabpzbeh.css';
import '../../css/i/i18t-xexp.css';
import '../../css/u/uybhwbbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wsabpzbeh"/><path class="i18t-xexp"/><path class="uybhwbbak"/></g>`,
		"fallback": "streamline-freehand-color:card-game-symbols",
	});
}

export default Component;
