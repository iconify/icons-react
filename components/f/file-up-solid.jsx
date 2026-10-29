import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bak1p_6df.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bak1p_6df"/>`,
		"fallback": "withicons:file-up-solid",
	});
}

export default Component;
