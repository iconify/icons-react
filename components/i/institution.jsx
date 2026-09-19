import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo6e8nbzk.css';
import '../../css/z/zhe7nq6ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo6e8nbzk"/><path class="zhe7nq6ez"/>`,
		"fallback": "boxicons:institution",
	});
}

export default Component;
