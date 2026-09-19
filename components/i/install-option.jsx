import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs8so_bfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs8so_bfq"/>`,
		"fallback": "grommet-icons:install-option",
	});
}

export default Component;
