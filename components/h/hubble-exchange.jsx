import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7gntf5tm.css';
import '../../css/s/sbi9n7bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7gntf5tm"/><path class="sbi9n7bck"/>`,
		"fallback": "token:hubble-exchange",
	});
}

export default Component;
