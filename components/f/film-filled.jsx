import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqx828nly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqx828nly"/>`,
		"fallback": "reicon:film-filled",
	});
}

export default Component;
