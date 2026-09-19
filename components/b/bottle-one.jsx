import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eik3fo4xg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eik3fo4xg"/>`,
		"fallback": "icon-park-outline:bottle-one",
	});
}

export default Component;
