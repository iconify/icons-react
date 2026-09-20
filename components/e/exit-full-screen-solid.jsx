import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdlkksbkp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tdlkksbkp"/>`,
		"fallback": "streamline-plump:exit-full-screen-solid",
	});
}

export default Component;
