import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gij27ab9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gij27ab9p"/>`,
		"fallback": "streamline-plump:cut-solid",
	});
}

export default Component;
