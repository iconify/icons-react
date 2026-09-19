import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfstxhi3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfstxhi3v"/>`,
		"fallback": "icomoon-free:forward2",
	});
}

export default Component;
