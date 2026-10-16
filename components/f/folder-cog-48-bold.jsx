import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrw5zccqv.css';
import '../../css/x/xvodhac-f.css';
import '../../css/l/lg3yrcb-s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrw5zccqv"/><path class="xvodhac-f"/><path class="lg3yrcb-s"/>`,
		"fallback": "energy-icons:folder-cog-48-bold",
	});
}

export default Component;
