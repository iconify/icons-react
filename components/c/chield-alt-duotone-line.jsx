import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdkk1iaqx.css';
import '../../css/q/qod0rfb7x.css';
import '../../css/p/p9mkru_9t.css';
import '../../css/b/b3m7_xbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdkk1iaqx"/><circle class="qod0rfb7x"/><circle class="p9mkru_9t"/><circle class="b3m7_xbrt"/>`,
		"fallback": "lets-icons:chield-alt-duotone-line",
	});
}

export default Component;
