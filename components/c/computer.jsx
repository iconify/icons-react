import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/fuzxbl.css';
import '../../css/r/rpw8kq.css';
import '../../css/s/so-from-8.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c fuzxbl"/><path class="a0m25c rpw8kq"/>`,
		"fallback": "line-md:computer",
	});
}

export default Component;
