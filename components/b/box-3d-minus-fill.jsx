import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px_rdbcpg.css';
import '../../css/u/u4c45h7qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px_rdbcpg"/><path class="u4c45h7qw"/>`,
		"fallback": "mage:box-3d-minus-fill",
	});
}

export default Component;
