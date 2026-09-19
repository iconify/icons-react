import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugku64bfl.css';

const viewBox = {"width":504,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugku64bfl"/>`,
		"fallback": "file-icons:influxdata",
	});
}

export default Component;
