import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goie45bfg.css';
import '../../css/q/q87m_jinq.css';
import '../../css/i/it04kcbvr.css';
import '../../css/f/fdlxrep5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goie45bfg"/><path class="q87m_jinq"/><path class="it04kcbvr"/><path class="fdlxrep5d"/>`,
		"fallback": "energy-icons:house-plus-48-bold",
	});
}

export default Component;
