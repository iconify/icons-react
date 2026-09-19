import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_ef_mb_g.css';
import '../../css/a/arri0f45p.css';
import '../../css/l/loakd2kiv.css';
import '../../css/u/u593-9scx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_ef_mb_g"/><path class="arri0f45p"/><path class="loakd2kiv"/><path class="u593-9scx"/></g>`,
		"fallback": "glyphs:car-bump-duo",
	});
}

export default Component;
