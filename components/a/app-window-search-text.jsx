import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ol3qevala.css';
import '../../css/q/qlbh4ybeo.css';
import '../../css/k/kl16iub3v.css';
import '../../css/w/wvla7xgat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ol3qevala"/><path class="qlbh4ybeo"/><path class="kl16iub3v"/><path class="wvla7xgat"/></g>`,
		"fallback": "streamline-freehand-color:app-window-search-text",
	});
}

export default Component;
