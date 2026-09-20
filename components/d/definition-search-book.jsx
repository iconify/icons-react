import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yteukhbjx.css';
import '../../css/k/kw0i7fa8y.css';
import '../../css/h/h7svsdb9k.css';
import '../../css/l/lspa03b8x.css';
import '../../css/m/m5lfe1bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yteukhbjx"/><path class="kw0i7fa8y"/><path class="h7svsdb9k"/><path class="lspa03b8x"/><path class="m5lfe1bob"/></g>`,
		"fallback": "streamline-sharp-color:definition-search-book",
	});
}

export default Component;
