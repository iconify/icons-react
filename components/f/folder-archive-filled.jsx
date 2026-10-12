import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xckdb_rmw.css';
import '../../css/d/dau5oxg5b.css';
import '../../css/y/yufc7rbuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xckdb_rmw"/><path class="dau5oxg5b"/><path class="yufc7rbuh"/>`,
		"fallback": "lucide-extended:folder-archive-filled",
	});
}

export default Component;
