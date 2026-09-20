import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/g/gos8dj.css';
import '../../css/b/b6nptq.css';
import '../../css/s/so-from-16.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c gos8dj"/><path class="a0m25c b6nptq"/>`,
		"fallback": "line-md:arrow-small-down",
	});
}

export default Component;
