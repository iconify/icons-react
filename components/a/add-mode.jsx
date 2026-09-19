import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgxld1aoi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgxld1aoi"/>`,
		"fallback": "icon-park-outline:add-mode",
	});
}

export default Component;
