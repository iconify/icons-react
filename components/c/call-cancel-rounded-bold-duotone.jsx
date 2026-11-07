import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/is_2cgerd.css';
import '../../css/s/s02o69bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="is_2cgerd"/><path class="s02o69bfv"/>`,
		"fallback": "solar:call-cancel-rounded-bold-duotone",
	});
}

export default Component;
