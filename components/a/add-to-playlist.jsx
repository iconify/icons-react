import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl88jpo7l.css';
import '../../css/z/zxbuae_pz.css';
import '../../css/m/mwad-08du.css';
import '../../css/b/b7y1tv8-w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zl88jpo7l"/><path class="zxbuae_pz"/><path class="mwad-08du"/><path class="b7y1tv8-w"/></g>`,
		"fallback": "streamline-flex-color:add-to-playlist",
	});
}

export default Component;
