import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fossymb9j.css';
import '../../css/n/n_fh7yyal.css';
import '../../css/f/f0lbeeb7w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fossymb9j"/><path clip-rule="evenodd" class="n_fh7yyal"/><path class="f0lbeeb7w"/></g>`,
		"fallback": "glyphs:bell-add-bold",
	});
}

export default Component;
