import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwd_1frdz.css';
import '../../css/b/bcr3mblqh.css';
import '../../css/y/yekhwhkwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qwd_1frdz"/><path class="bcr3mblqh"/><path class="yekhwhkwq"/>`,
		"fallback": "stash:image-times-light",
	});
}

export default Component;
