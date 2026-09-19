import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/eoqs9jb2q.css';
import '../../css/r/rkgmofbxf.css';
import '../../css/b/byfvflb4v.css';
import '../../css/f/f3f7r-b4l.css';
import '../../css/d/dzta_nc4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="eoqs9jb2q"/><path class="rkgmofbxf"/><path class="byfvflb4v"/><path class="f3f7r-b4l"/><path class="dzta_nc4o"/></g>`,
		"fallback": "hugeicons:bedug-02",
	});
}

export default Component;
