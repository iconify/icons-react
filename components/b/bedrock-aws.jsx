import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz--5rbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz--5rbwq"/>`,
		"fallback": "thesvg-color:bedrock-aws",
	});
}

export default Component;
