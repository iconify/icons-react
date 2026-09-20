import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyreydb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zyreydb_j"/>`,
		"fallback": "streamline-sharp:align-back-2-solid",
	});
}

export default Component;
