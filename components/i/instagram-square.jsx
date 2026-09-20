import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzle1mbxg.css';
import '../../css/m/mzxakcc6v.css';
import '../../css/a/a0i4ueb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzle1mbxg"/><path class="mzxakcc6v"/><path class="a0i4ueb3z"/>`,
		"fallback": "mage:instagram-square",
	});
}

export default Component;
