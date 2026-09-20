import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhy5ambjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qhy5ambjx"/>`,
		"fallback": "streamline-sharp:database-server-2-remix",
	});
}

export default Component;
