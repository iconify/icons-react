import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/s/s7-6_qziz.css';
import '../../css/d/ddl1lfbrb.css';
import '../../css/a/a96tixzoc.css';
import '../../css/k/kbh69udzs.css';
import '../../css/e/ete3kkyam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="s7-6_qziz"/><path class="ddl1lfbrb"/><path class="a96tixzoc"/><path class="kbh69udzs"/><path class="ete3kkyam"/></g>`,
		"fallback": "icon-park:first-aid-kit",
	});
}

export default Component;
