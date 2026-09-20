import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lod9z8b3l.css';
import '../../css/r/r5yt9i3pi.css';
import '../../css/j/jnuktt31k.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lod9z8b3l"/><path class="r5yt9i3pi"/><path class="jnuktt31k"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:earth-americas-circle",
	});
}

export default Component;
