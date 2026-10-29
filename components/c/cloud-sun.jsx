import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syehdcb-y.css';
import '../../css/l/lv_77yb9s.css';
import '../../css/c/ceo0kmpvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syehdcb-y wm-a"/><path class="lv_77yb9s wm-a"/><path class="ceo0kmpvt wm-k"/>`,
		"fallback": "withicons-bauhaus:cloud-sun",
	});
}

export default Component;
