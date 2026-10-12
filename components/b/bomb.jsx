import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o05os2bzx.css';
import '../../css/f/fzj34vzin.css';
import '../../css/r/ru2z68b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="o05os2bzx"/><circle class="fzj34vzin"/><path class="ru2z68b9q"/></g>`,
		"fallback": "andrsrxn:bomb",
	});
}

export default Component;
