import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mobv6wb_v.css';
import '../../css/j/jr13wwetb.css';
import '../../css/g/gvknz8zvu.css';
import '../../css/a/a-4ra4bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mobv6wb_v"/><path class="jr13wwetb"/><path class="gvknz8zvu"/><path class="a-4ra4bvx"/>`,
		"fallback": "uim:instagram-alt",
	});
}

export default Component;
