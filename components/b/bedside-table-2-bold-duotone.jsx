import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5k33wnun.css';
import '../../css/z/zmr_0im2r.css';
import '../../css/l/laypnctxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s5k33wnun"/><path class="zmr_0im2r"/><path clip-rule="evenodd" class="laypnctxv"/>`,
		"fallback": "solar:bedside-table-2-bold-duotone",
	});
}

export default Component;
