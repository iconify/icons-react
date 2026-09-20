import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lua9-g0jf.css';
import '../../css/d/dsjuhdb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lua9-g0jf"/><path class="dsjuhdb_g"/>`,
		"fallback": "token:emp",
	});
}

export default Component;
