import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y73mcacql.css';
import '../../css/u/uczknee5t.css';
import '../../css/z/zltaslbfd.css';
import '../../css/y/y4i3kqnzd.css';
import '../../css/g/gtnfu8a3j.css';
import '../../css/y/yjh_ifvdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow y73mcacql"/><path class="uczknee5t wm-k"/><path class="wm-k zltaslbfd"/><path class="wm-k y4i3kqnzd"/><path class="gtnfu8a3j wm-k"/><path class="wm-shine yjh_ifvdr"/>`,
		"fallback": "withicons-pastel:close",
	});
}

export default Component;
