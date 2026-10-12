import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwnut8bui.css';
import '../../css/t/tag_xcyrt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwnut8bui"/><path class="tag_xcyrt"/>`,
		"fallback": "energy-icons:gearbox-48",
	});
}

export default Component;
