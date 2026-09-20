import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/z/zu019c.css';
import '../../css/z/zf6m_y.css';
import '../../css/r/rb0cwy.css';
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
		"content": `<path class="a0m25c zu019c"/><path class="a0m25c zf6m_y"/><path class="a0m25c rb0cwy"/>`,
		"fallback": "line-md:chevron-small-triple-right",
	});
}

export default Component;
