import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzve_6a2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzve_6a2z"/>`,
		"fallback": "icon-park-outline:add-item",
	});
}

export default Component;
