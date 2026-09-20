import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/m/m40z4o.css';
import '../../css/v/v7zwrw.css';
import '../../css/z/z5rc8u.css';
import '../../css/k/kf9r7q.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c m40z4o"/><path class="a0m25c v7zwrw"/><path class="a0m25c z5rc8u"/><path class="a0m25c kf9r7q"/>`,
		"fallback": "line-md:align-center",
	});
}

export default Component;
