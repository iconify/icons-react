import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmfqb3vgi.css';
import '../../css/m/mnjoo2b-e.css';
import '../../css/d/d72uamb_u.css';
import '../../css/j/jthpq7bcp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmfqb3vgi"/><path class="mnjoo2b-e"/><path class="d72uamb_u"/><path class="jthpq7bcp"/></g>`,
		"fallback": "fluent-emoji-flat:field-hockey",
	});
}

export default Component;
