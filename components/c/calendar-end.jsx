import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odnhlrb0v.css';
import '../../css/y/ynooprbfx.css';
import '../../css/i/inbmw3pdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odnhlrb0v"/><path class="ynooprbfx"/><path clip-rule="evenodd" class="inbmw3pdp"/>`,
		"fallback": "stash:calendar-end",
	});
}

export default Component;
