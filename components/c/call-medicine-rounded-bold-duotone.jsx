import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkxo3pbyr.css';
import '../../css/x/x6g9eebag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkxo3pbyr"/><path class="x6g9eebag"/>`,
		"fallback": "solar:call-medicine-rounded-bold-duotone",
	});
}

export default Component;
