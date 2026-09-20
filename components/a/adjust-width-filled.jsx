import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw98_2wjg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pw98_2wjg"/>`,
		"fallback": "lsicon:adjust-width-filled",
	});
}

export default Component;
