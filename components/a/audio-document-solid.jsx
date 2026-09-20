import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gljxhwefi.css';
import '../../css/l/lus1dsb7c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gljxhwefi"/><path clip-rule="evenodd" class="lus1dsb7c"/>`,
		"fallback": "teenyicons:audio-document-solid",
	});
}

export default Component;
