import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/r/rc6h4dq6f.css';
import '../../css/s/sjg59cb2m.css';
import '../../css/d/d-ekqwgrr.css';
import '../../css/q/qd4nuxbqg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="rc6h4dq6f"/><path class="sjg59cb2m"/><path class="d-ekqwgrr"/><path class="qd4nuxbqg"/></g>`,
		"fallback": "streamline-plump:burger",
	});
}

export default Component;
