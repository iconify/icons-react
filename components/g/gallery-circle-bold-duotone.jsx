import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzudi5blo.css';
import '../../css/s/snglypb8l.css';
import '../../css/e/e---ckffe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzudi5blo"/><path class="snglypb8l"/><path clip-rule="evenodd" class="e---ckffe"/>`,
		"fallback": "solar:gallery-circle-bold-duotone",
	});
}

export default Component;
