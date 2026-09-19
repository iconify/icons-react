import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt9uwhbzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt9uwhbzc"/>`,
		"fallback": "icon-park-solid:down-one",
	});
}

export default Component;
