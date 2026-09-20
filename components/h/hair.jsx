import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qapg4nbep.css';
import '../../css/x/xtc8foe2n.css';
import '../../css/t/tqa0n8bym.css';
import '../../css/j/jfwgumbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qapg4nbep"/><path class="xtc8foe2n"/><path class="tqa0n8bym"/><path class="jfwgumbcn"/>`,
		"fallback": "token:hair",
	});
}

export default Component;
