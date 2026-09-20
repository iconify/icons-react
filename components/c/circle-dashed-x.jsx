import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szz_hddff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szz_hddff"/>`,
		"fallback": "tabler:circle-dashed-x",
	});
}

export default Component;
