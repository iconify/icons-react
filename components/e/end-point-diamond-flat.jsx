import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn7azlbut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn7azlbut"/>`,
		"fallback": "streamline-plump-color:end-point-diamond-flat",
	});
}

export default Component;
