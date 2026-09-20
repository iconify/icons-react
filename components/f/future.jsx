import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v82e24b6u.css';
import '../../css/x/xesggzbzh.css';
import '../../css/o/o0t_mxbai.css';
import '../../css/u/u4xuplbqa.css';
import '../../css/x/x6tqtm9ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v82e24b6u"/><path class="xesggzbzh"/><path clip-rule="evenodd" class="o0t_mxbai"/><path class="u4xuplbqa"/><path clip-rule="evenodd" class="x6tqtm9ls"/>`,
		"fallback": "token:future",
	});
}

export default Component;
