import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk7p9p4ic.css';
import '../../css/d/dj_nl9bot.css';
import '../../css/i/i0zetk6vj.css';
import '../../css/l/loe7u9xjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk7p9p4ic"/><path class="dj_nl9bot"/><path class="i0zetk6vj"/><path class="loe7u9xjt"/>`,
		"fallback": "pixel:golden",
	});
}

export default Component;
