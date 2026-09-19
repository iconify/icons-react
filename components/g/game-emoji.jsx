import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg_bf7b5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg_bf7b5f"/>`,
		"fallback": "icon-park-solid:game-emoji",
	});
}

export default Component;
