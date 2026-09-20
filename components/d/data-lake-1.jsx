import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cqiib0buf.css';
import '../../css/z/zznh62lhy.css';
import '../../css/h/htt0u436l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="cqiib0buf"/><path class="zznh62lhy"/><path class="htt0u436l"/></g>`,
		"fallback": "streamline-ultimate:data-lake-1",
	});
}

export default Component;
