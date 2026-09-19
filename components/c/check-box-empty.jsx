import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_nmbcf5j.css';

const viewBox = {"width":304,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_nmbcf5j"/>`,
		"fallback": "ps:check-box-empty",
	});
}

export default Component;
