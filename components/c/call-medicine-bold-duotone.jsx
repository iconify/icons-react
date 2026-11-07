import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly-_et2sc.css';
import '../../css/f/fkxo3pbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly-_et2sc"/><path clip-rule="evenodd" class="fkxo3pbyr"/>`,
		"fallback": "solar:call-medicine-bold-duotone",
	});
}

export default Component;
