import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fp5w7jz8b.css';
import '../../css/k/kwjjqxyvb.css';
import '../../css/g/gpggdbcsk.css';
import '../../css/c/c2nhh94oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fp5w7jz8b"/><path class="kwjjqxyvb"/><path class="gpggdbcsk"/><path class="c2nhh94oa"/></g>`,
		"fallback": "streamline-freehand-color:disability-hearing-t",
	});
}

export default Component;
