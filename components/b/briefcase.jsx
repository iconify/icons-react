import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9uq9xp4r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9uq9xp4r"/>`,
		"fallback": "f7:briefcase",
	});
}

export default Component;
