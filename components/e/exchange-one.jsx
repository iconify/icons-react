import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q13ik7jzl.css';
import '../../css/h/hkwjco5gx.css';
import '../../css/v/v8dqwh07n.css';
import '../../css/z/z-p6fjy6h.css';
import '../../css/t/trcpxbl4n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="q13ik7jzl"/><path class="hkwjco5gx"/><path class="v8dqwh07n"/><path class="z-p6fjy6h"/><path class="trcpxbl4n"/></g>`,
		"fallback": "icon-park:exchange-one",
	});
}

export default Component;
