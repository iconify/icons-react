import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs85jub3t.css';
import '../../css/x/xs84k4bav.css';
import '../../css/n/n-c0l9fka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs85jub3t"/><path clip-rule="evenodd" class="xs84k4bav"/><path class="n-c0l9fka"/>`,
		"fallback": "stash:article-plus",
	});
}

export default Component;
