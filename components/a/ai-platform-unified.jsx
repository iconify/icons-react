import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukw_gmbqh.css';
import '../../css/u/u0m617c8w.css';
import '../../css/g/g6027d_my.css';
import '../../css/f/f5u_fnb3z.css';
import '../../css/j/jqc61ubda.css';
import '../../css/j/jn9qp7b4e.css';
import '../../css/f/f-zsrybke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukw_gmbqh"/><path class="u0m617c8w"/><circle class="g6027d_my"/><path class="f5u_fnb3z"/><circle class="jqc61ubda"/><path class="jn9qp7b4e"/><circle class="f-zsrybke"/>`,
		"fallback": "gcp:ai-platform-unified",
	});
}

export default Component;
