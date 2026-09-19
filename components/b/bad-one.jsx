import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xick6v_8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xick6v_8g"/>`,
		"fallback": "icon-park-outline:bad-one",
	});
}

export default Component;
