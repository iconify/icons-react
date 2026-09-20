import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1bziabvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t1bziabvf"/>`,
		"fallback": "streamline-plump:fork-plate-solid",
	});
}

export default Component;
