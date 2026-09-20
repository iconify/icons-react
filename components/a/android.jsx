import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loxbev73e.css';
import '../../css/x/xma1ufbac.css';
import '../../css/j/j5_j-i9ht.css';
import '../../css/a/aa6h0u40v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loxbev73e"/><circle class="xma1ufbac"/><circle class="j5_j-i9ht"/><path class="aa6h0u40v"/>`,
		"fallback": "prime:android",
	});
}

export default Component;
