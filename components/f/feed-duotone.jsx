import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7r425_gi.css';
import '../../css/q/qgbgttb3i.css';
import '../../css/g/gtes6eb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7r425_gi"/><path class="qgbgttb3i"/><path class="gtes6eb5q"/>`,
		"fallback": "stash:feed-duotone",
	});
}

export default Component;
