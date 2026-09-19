import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z95k64dbt.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z95k64dbt"/>`,
		"fallback": "whh:certificatealt",
	});
}

export default Component;
