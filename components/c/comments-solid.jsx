import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw-d8obrx.css';
import '../../css/z/zh8kziv_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw-d8obrx"/><path class="zh8kziv_a"/>`,
		"fallback": "pixel:comments-solid",
	});
}

export default Component;
