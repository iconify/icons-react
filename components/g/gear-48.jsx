import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvv10bauq.css';
import '../../css/h/h-_usl8fm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvv10bauq"/><path class="h-_usl8fm"/>`,
		"fallback": "energy-icons:gear-48",
	});
}

export default Component;
