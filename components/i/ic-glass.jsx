import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_svndbfa.css';
import '../../css/b/bexar7b7s.css';
import '../../css/m/mntxcwjfq.css';

const viewBox = {"width":224.88,"height":225};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_svndbfa"/><path class="bexar7b7s"/><path class="mntxcwjfq"/>`,
		"fallback": "thesvg-color:ic-glass",
	});
}

export default Component;
