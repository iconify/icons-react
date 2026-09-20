import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p680rwbug.css';
import '../../css/p/pgldy5bla.css';
import '../../css/d/d2xewfbqe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p680rwbug"/><path class="pgldy5bla"/><path class="d2xewfbqe"/>`,
		"fallback": "streamline-pixel:hand",
	});
}

export default Component;
