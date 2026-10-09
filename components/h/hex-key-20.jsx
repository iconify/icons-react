import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llvz37kzf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llvz37kzf"/>`,
		"fallback": "energy-icons:hex-key-20",
	});
}

export default Component;
