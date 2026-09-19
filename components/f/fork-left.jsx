import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hn0kg3bfd.css';
import '../../css/e/e22mftpxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="hn0kg3bfd"/><path class="e22mftpxp"/></g>`,
		"fallback": "akar-icons:fork-left",
	});
}

export default Component;
