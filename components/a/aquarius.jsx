import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeyspvidn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeyspvidn"/>`,
		"fallback": "icon-park-outline:aquarius",
	});
}

export default Component;
