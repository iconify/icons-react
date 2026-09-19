import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m_e9l_bfp.css';
import '../../css/l/lflmn5b2o.css';
import '../../css/l/lnejq7ksj.css';
import '../../css/o/o6dfa4b9w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="m_e9l_bfp"/><path class="lflmn5b2o"/><path class="lnejq7ksj"/><path class="o6dfa4b9w"/></g>`,
		"fallback": "icon-park:chef-hat",
	});
}

export default Component;
