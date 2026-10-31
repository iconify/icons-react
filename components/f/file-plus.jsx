import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp49bsb_r.css';
import '../../css/p/p5jltiloh.css';
import '../../css/z/z0prpmb5y.css';
import '../../css/b/bbf1ddbmn.css';
import '../../css/f/fj9dagbxo.css';
import '../../css/i/i58vsty7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dp49bsb_r wm-k"/><path class="p5jltiloh wm-deco"/><path class="wm-k z0prpmb5y"/><path class="bbf1ddbmn wm-k"/><path class="fj9dagbxo wm-shadow"/><path class="i58vsty7y wm-shine"/></g>`,
		"fallback": "withicons-valentine:file-plus",
	});
}

export default Component;
