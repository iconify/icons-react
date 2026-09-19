import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ui7fq0b2z.css';
import '../../css/d/dqldqoosw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ui7fq0b2z"/><path class="dqldqoosw"/></g>`,
		"fallback": "glyphs:arrow-solid-line-start-duo",
	});
}

export default Component;
