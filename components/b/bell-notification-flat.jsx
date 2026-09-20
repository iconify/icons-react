import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gzujv9qgv.css';
import '../../css/t/tv0ng8oix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gzujv9qgv"/><path class="tv0ng8oix"/></g>`,
		"fallback": "streamline-sharp-color:bell-notification-flat",
	});
}

export default Component;
