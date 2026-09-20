import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/e/e7xr4w.css';
import '../../css/p/pdut_d.css';
import '../../css/m/mosjig.css';
import '../../css/e/er1d7w.css';
import '../../css/q/qanl8c.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-c7v0ns.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-o0luwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c e7xr4w"/><path class="a0m25c pdut_d"/><path class="a0m25c mosjig"/><path class="a0m25c er1d7w"/><path class="a0m25c qanl8c"/>`,
		"fallback": "line-md:folder-network",
	});
}

export default Component;
