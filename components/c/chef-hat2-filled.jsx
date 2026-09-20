import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpw5ybclo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpw5ybclo"/>`,
		"fallback": "reicon:chef-hat2-filled",
	});
}

export default Component;
