import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8vgp4bkd.css';

const viewBox = {"width":16,"height":7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8vgp4bkd"/>`,
		"fallback": "formkit:down",
	});
}

export default Component;
