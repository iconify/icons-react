import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/l/ldq1rs.css';
import '../../css/n/nvebom.css';
import '../../css/q/q3o00q.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ldq1rs"/><path class="a0m25c nvebom"/><path class="a0m25c q3o00q"/>`,
		"fallback": "line-md:arrow-align-right",
	});
}

export default Component;
