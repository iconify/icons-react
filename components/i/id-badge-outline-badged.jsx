import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg3jy0b5j.css';
import '../../css/y/y23fb-bou.css';
import '../../css/x/x7vk-qbdx.css';
import '../../css/e/enpfy0bif.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline--badged clr-i-outline-path-1--badged fg3jy0b5j"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged y23fb-bou"/><path class="clr-i-outline--badged clr-i-outline-path-3--badged x7vk-qbdx"/><path class="clr-i-outline--badged clr-i-outline-path-4--badged enpfy0bif"/><circle class="clr-i-badge clr-i-outline--badged clr-i-outline-path-5--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:id-badge-outline-badged",
	});
}

export default Component;
