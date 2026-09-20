import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/kui0xebwu.css';
import '../../css/x/xlnhc8tfb.css';
import '../../css/r/rbuu6uban.css';
import '../../css/i/i3oypo-mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="kui0xebwu"/><path class="xlnhc8tfb"/><path class="rbuu6uban"/><path class="i3oypo-mg"/></g>`,
		"fallback": "streamline-sharp-color:ai-science-spark",
	});
}

export default Component;
