import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k13g4ld-j.css';
import '../../css/j/jpx3_871k.css';
import '../../css/b/b_yth_bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k13g4ld-j"/><path class="jpx3_871k"/><path class="b_yth_bng"/></g>`,
		"fallback": "streamline-freehand-color:accessories-retro-film-1",
	});
}

export default Component;
