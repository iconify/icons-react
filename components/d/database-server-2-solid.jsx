import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abpo0gboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abpo0gboi"/>`,
		"fallback": "streamline-sharp:database-server-2-solid",
	});
}

export default Component;
