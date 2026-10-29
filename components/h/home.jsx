import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgnl85bbd.css';
import '../../css/y/ymlv-abhc.css';
import '../../css/h/heznmzwkn.css';
import '../../css/b/bdz_3cc9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgnl85bbd wm-k"/><path class="wm-k ymlv-abhc"/><path class="heznmzwkn wm-a"/><path class="bdz_3cc9g wm-k"/>`,
		"fallback": "withicons-bauhaus:home",
	});
}

export default Component;
