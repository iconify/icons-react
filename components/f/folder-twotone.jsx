import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s310mjyrf.css';
import '../../css/p/pvkzb2byg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s310mjyrf"/><path class="pvkzb2byg"/>`,
		"fallback": "ant-design:folder-twotone",
	});
}

export default Component;
