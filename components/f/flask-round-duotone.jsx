import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6-u9uk-z.css';
import '../../css/p/p8q_2ebrp.css';
import '../../css/y/yu6g1gb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6-u9uk-z"/><path class="p8q_2ebrp"/><path class="yu6g1gb2n"/></g>`,
		"fallback": "lucide-extended:flask-round-duotone",
	});
}

export default Component;
