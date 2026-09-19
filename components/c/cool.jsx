import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ibwhbai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ibwhbai"/>`,
		"fallback": "icon-park-solid:cool",
	});
}

export default Component;
