import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr5gqzbjx.css';
import '../../css/m/m9wqefbui.css';
import '../../css/c/c2qsnhb3c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tr5gqzbjx"/><path class="m9wqefbui"/><path class="c2qsnhb3c"/></g>`,
		"fallback": "glyphs:film-1-bold",
	});
}

export default Component;
