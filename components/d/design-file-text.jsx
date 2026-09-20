import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/admxylbii.css';
import '../../css/r/ri6ar4dao.css';
import '../../css/f/f0grr5beu.css';
import '../../css/e/edtswhf-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="admxylbii"/><path class="ri6ar4dao"/><path class="f0grr5beu"/><path class="edtswhf-u"/></g>`,
		"fallback": "streamline-ultimate-color:design-file-text",
	});
}

export default Component;
