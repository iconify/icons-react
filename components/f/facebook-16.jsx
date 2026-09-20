import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myqkzzb1a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myqkzzb1a"/>`,
		"fallback": "qlementine-icons:facebook-16",
	});
}

export default Component;
