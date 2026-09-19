import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goohnvfrd.css';
import '../../css/z/z8ck8jbnx.css';
import '../../css/l/llok4vb-m.css';
import '../../css/b/bm19tu52u.css';
import '../../css/j/jkay9v9tb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goohnvfrd"/><path class="z8ck8jbnx"/><path class="llok4vb-m"/><path class="bm19tu52u"/><circle class="jkay9v9tb"/>`,
		"fallback": "flat-color-icons:image-file",
	});
}

export default Component;
