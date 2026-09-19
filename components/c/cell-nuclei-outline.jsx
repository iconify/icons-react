import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/auepnlsue.css';
import '../../css/w/wjmhvtbnf.css';
import '../../css/m/md1ii0b4j.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="auepnlsue"/><path clip-rule="evenodd" class="wjmhvtbnf"/><path clip-rule="evenodd" class="md1ii0b4j"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`,
		"fallback": "healthicons:cell-nuclei-outline",
	});
}

export default Component;
