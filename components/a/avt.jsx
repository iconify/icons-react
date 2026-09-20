import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1l45ccjy.css';
import '../../css/b/b-5uoz78u.css';
import '../../css/a/a4yfnabqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1l45ccjy"/><path class="b-5uoz78u"/><path class="a4yfnabqi"/>`,
		"fallback": "token:avt",
	});
}

export default Component;
