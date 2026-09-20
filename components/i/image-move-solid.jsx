import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whl2ggbnv.css';
import '../../css/z/zxqlfdc4u.css';
import '../../css/d/dw105c7vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whl2ggbnv"/><path clip-rule="evenodd" class="zxqlfdc4u"/><path class="dw105c7vv"/>`,
		"fallback": "stash:image-move-solid",
	});
}

export default Component;
