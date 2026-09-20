import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hegsj5srz.css';
import '../../css/b/bmfu_2bku.css';
import '../../css/v/v547fi37q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hegsj5srz"/><path class="bmfu_2bku"/><path class="v547fi37q"/>`,
		"fallback": "thesvg-color:baiducloud",
	});
}

export default Component;
