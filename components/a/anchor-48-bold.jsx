import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_gzed_lp.css';
import '../../css/s/sed9x-mdd.css';
import '../../css/c/cjftz1f6d.css';
import '../../css/a/aiqt_ub4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_gzed_lp"/><path class="sed9x-mdd"/><path class="cjftz1f6d"/><path class="aiqt_ub4f"/>`,
		"fallback": "energy-icons:anchor-48-bold",
	});
}

export default Component;
