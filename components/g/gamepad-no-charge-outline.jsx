import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8orc3tyd.css';
import '../../css/u/uy-sggl9k.css';
import '../../css/r/rers1paxa.css';
import '../../css/a/aui-jmtcx.css';
import '../../css/u/uv4oycn3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o8orc3tyd"/><path class="uy-sggl9k"/><path class="rers1paxa"/><path class="aui-jmtcx"/><path class="uv4oycn3f"/>`,
		"fallback": "solar:gamepad-no-charge-outline",
	});
}

export default Component;
