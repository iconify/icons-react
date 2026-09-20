import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdtr-tgcy.css';
import '../../css/x/xqehzub3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdtr-tgcy"/><path class="xqehzub3h"/>`,
		"fallback": "tdesign:double-storey-filled",
	});
}

export default Component;
