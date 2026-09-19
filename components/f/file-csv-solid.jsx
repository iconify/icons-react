import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd2sxkkrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dd2sxkkrk"/>`,
		"fallback": "flowbite:file-csv-solid",
	});
}

export default Component;
