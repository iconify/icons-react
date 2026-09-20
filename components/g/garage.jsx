import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/two3jk_np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="two3jk_np"/>`,
		"fallback": "reicon:garage",
	});
}

export default Component;
