import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsvhz9bpc.css';
import '../../css/u/ui3j74sqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsvhz9bpc wm-k"/><path class="ui3j74sqk wm-a"/>`,
		"fallback": "withicons-bauhaus:badge-percent",
	});
}

export default Component;
