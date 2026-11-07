import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpvo_gb0n.css';
import '../../css/a/akoivubxv.css';
import '../../css/e/eqwsh3bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpvo_gb0n"/><path class="akoivubxv"/><path clip-rule="evenodd" class="eqwsh3bwg"/>`,
		"fallback": "solar:align-left-bold-duotone",
	});
}

export default Component;
