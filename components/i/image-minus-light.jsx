import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-zhl_bfp.css';
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
		"content": `<path class="r-zhl_bfp"/><path class="ytcirkb0g"/><path class="yekhwhkwq"/>`,
		"fallback": "stash:image-minus-light",
	});
}

export default Component;
