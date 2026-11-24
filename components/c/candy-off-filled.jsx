import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj2q-yklp.css';
import '../../css/v/v7flhwbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dj2q-yklp"/><path class="v7flhwbqh"/>`,
		"fallback": "lucide-extended:candy-off-filled",
	});
}

export default Component;
