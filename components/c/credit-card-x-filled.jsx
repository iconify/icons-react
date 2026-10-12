import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xomsf6buj.css';
import '../../css/o/o7jf5lv9i.css';
import '../../css/j/jtfx71bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xomsf6buj"/><path clip-rule="evenodd" class="o7jf5lv9i"/><path class="jtfx71bvf"/>`,
		"fallback": "lucide-extended:credit-card-x-filled",
	});
}

export default Component;
