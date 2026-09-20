import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un_cf_ubk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="un_cf_ubk"/>`,
		"fallback": "streamline-plump:charging-solid",
	});
}

export default Component;
