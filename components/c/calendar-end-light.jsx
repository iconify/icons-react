import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odnhlrb0v.css';
import '../../css/y/ynooprbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odnhlrb0v"/><path class="ynooprbfx"/>`,
		"fallback": "stash:calendar-end-light",
	});
}

export default Component;
