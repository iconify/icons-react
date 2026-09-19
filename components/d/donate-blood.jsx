import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk5quyb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk5quyb5i"/>`,
		"fallback": "bxs:donate-blood",
	});
}

export default Component;
