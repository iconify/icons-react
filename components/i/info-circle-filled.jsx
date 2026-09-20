import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzx5mqigw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzx5mqigw"/>`,
		"fallback": "tabler:info-circle-filled",
	});
}

export default Component;
