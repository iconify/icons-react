import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxjl7h_2h.css';
import '../../css/p/puwnn8bma.css';
import '../../css/f/fsdyx0e6l.css';
import '../../css/y/ywhe_o_vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxjl7h_2h wm-k"/><path class="puwnn8bma wm-k"/><path class="fsdyx0e6l wm-a"/><path class="wm-k ywhe_o_vn"/>`,
		"fallback": "withicons-bauhaus:factory",
	});
}

export default Component;
