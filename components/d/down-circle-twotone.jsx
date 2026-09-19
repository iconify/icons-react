import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si4d4hb_u.css';
import '../../css/y/yv_brepse.css';
import '../../css/f/f33c5bbfy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si4d4hb_u"/><path class="yv_brepse"/><path class="f33c5bbfy"/>`,
		"fallback": "ant-design:down-circle-twotone",
	});
}

export default Component;
