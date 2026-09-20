import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phnrhixsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phnrhixsn"/>`,
		"fallback": "streamline-sharp:hourglass-solid",
	});
}

export default Component;
