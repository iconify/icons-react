import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd9nkhyoc.css';
import '../../css/p/p75pqt91z.css';
import '../../css/z/zc15j_bcm.css';
import '../../css/p/p35wb2biw.css';
import '../../css/m/me-r5rm1l.css';
import '../../css/d/d_jb3ybje.css';
import '../../css/c/c-o4xsbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow zd9nkhyoc"/><path class="p75pqt91z wm-k"/><path class="wm-k zc15j_bcm"/><path class="p35wb2biw wm-k"/><path class="me-r5rm1l wm-k"/><path class="d_jb3ybje wm-s"/><path class="c-o4xsbml wm-s"/>`,
		"fallback": "withicons-pastel:heading-2",
	});
}

export default Component;
