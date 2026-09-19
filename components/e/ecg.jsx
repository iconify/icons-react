import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj9jg98vx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj9jg98vx"/>`,
		"fallback": "icon-park:ecg",
	});
}

export default Component;
