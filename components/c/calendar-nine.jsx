import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aey68mb3i.css';
import '../../css/y/ynooprbfx.css';
import '../../css/y/yc1hb9b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aey68mb3i"/><path class="ynooprbfx"/><path clip-rule="evenodd" class="yc1hb9b0x"/>`,
		"fallback": "stash:calendar-nine",
	});
}

export default Component;
