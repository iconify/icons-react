import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfoyym1_j.css';
import '../../css/e/etmwjccup.css';
import '../../css/u/un9j7db-y.css';
import '../../css/n/ntxtlllhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfoyym1_j"/><path class="etmwjccup"/><path class="un9j7db-y"/><path class="ntxtlllhu"/>`,
		"fallback": "streamline-ultimate:database-2-bold",
	});
}

export default Component;
