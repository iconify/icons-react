import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqt-14zzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gqt-14zzt"/>`,
		"fallback": "healthicons:cast-outline",
	});
}

export default Component;
