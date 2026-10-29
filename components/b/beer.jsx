import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnzhe816f.css';
import '../../css/q/q5ga_h1wk.css';
import '../../css/c/c_rqzpd-h.css';
import '../../css/e/e01n1zikz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xnzhe816f"/><path class="q5ga_h1wk wm-k"/><path class="c_rqzpd-h wm-a"/><path class="e01n1zikz wm-a"/>`,
		"fallback": "withicons-bauhaus:beer",
	});
}

export default Component;
