import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avbyq5urn.css';
import '../../css/r/r9qd5__9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avbyq5urn"/><path clip-rule="evenodd" class="r9qd5__9z"/>`,
		"fallback": "solar:gallery-favourite-bold-duotone",
	});
}

export default Component;
