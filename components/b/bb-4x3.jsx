import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1srlfbxm.css';
import '../../css/j/jgf1-yx6g.css';
import '../../css/p/pgw3075uw.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1srlfbxm"/><path class="jgf1-yx6g"/><path id="SVGrF6Z8dBc" class="pgw3075uw"/><use width="100%" height="100%" href="#SVGrF6Z8dBc" transform="matrix(-1 0 0 1 639.5 0)"/>`,
		"fallback": "flag:bb-4x3",
	});
}

export default Component;
