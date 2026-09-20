import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thkzaxbzw.css';
import '../../css/y/ytcirkb0g.css';
import '../../css/y/yekhwhkwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thkzaxbzw"/><path class="ytcirkb0g"/><path class="yekhwhkwq"/>`,
		"fallback": "stash:image-plus-light",
	});
}

export default Component;
