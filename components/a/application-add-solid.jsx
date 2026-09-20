import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st4w9dbjt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="st4w9dbjt"/>`,
		"fallback": "streamline-plump:application-add-solid",
	});
}

export default Component;
