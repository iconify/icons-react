import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu16377vq.css';
import '../../css/y/ynooprbfx.css';
import '../../css/r/rmbuj8bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu16377vq"/><path class="ynooprbfx"/><path clip-rule="evenodd" class="rmbuj8bce"/>`,
		"fallback": "stash:calendar-star",
	});
}

export default Component;
