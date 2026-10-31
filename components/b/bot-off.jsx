import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p-sqx5bia.css';
import '../../css/j/jaegigb3l.css';
import '../../css/n/n-57f94mt.css';
import '../../css/w/wahuf72hz.css';
import '../../css/q/qipx3tbli.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p-sqx5bia wm-shadow"/><path class="jaegigb3l"/><path class="n-57f94mt"/><path class="wahuf72hz"/><path class="qipx3tbli"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:bot-off",
	});
}

export default Component;
