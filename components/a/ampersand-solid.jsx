import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lin6cdbhi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lin6cdbhi"/>`,
		"fallback": "streamline-plump:ampersand-solid",
	});
}

export default Component;
