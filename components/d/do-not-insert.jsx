import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9wlfhxue.css';
import '../../css/y/ysqe04k0c.css';
import '../../css/p/pqckhf6dx.css';
import '../../css/e/eoxrd6gmj.css';
import '../../css/o/o0xw4kbra.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l9wlfhxue"><path class="ysqe04k0c"/><path class="pqckhf6dx"/><path class="eoxrd6gmj"/></g><path class="o0xw4kbra"/>`,
		"fallback": "flat-color-icons:do-not-insert",
	});
}

export default Component;
