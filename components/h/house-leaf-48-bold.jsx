import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfpjugbvy.css';
import '../../css/z/zrlwepbcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfpjugbvy"/><path class="zrlwepbcp"/>`,
		"fallback": "energy-icons:house-leaf-48-bold",
	});
}

export default Component;
