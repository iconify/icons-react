import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epn4iybfc.css';
import '../../css/u/uk-710b6s.css';
import '../../css/g/g-doz0n7w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="epn4iybfc"/><path class="uk-710b6s"/><path class="g-doz0n7w"/></g>`,
		"fallback": "glyphs:bezier-square-duo",
	});
}

export default Component;
