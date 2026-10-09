import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta5f1hbwd.css';
import '../../css/v/vgs6v8b5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta5f1hbwd"/><path class="vgs6v8b5p"/>`,
		"fallback": "energy-icons:alarm-clock-48-bold",
	});
}

export default Component;
