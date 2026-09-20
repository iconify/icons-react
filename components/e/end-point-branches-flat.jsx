import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdltqurcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdltqurcd"/>`,
		"fallback": "streamline-plump-color:end-point-branches-flat",
	});
}

export default Component;
