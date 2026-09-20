import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z36vppbrp.css';
import '../../css/r/r7kylibfa.css';
import '../../css/k/knr7kda6q.css';
import '../../css/b/btbutb-jz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="z36vppbrp"/><path class="r7kylibfa"/><path class="knr7kda6q"/><path class="btbutb-jz"/></g>`,
		"fallback": "streamline-plump-color:ice-cream-2",
	});
}

export default Component;
