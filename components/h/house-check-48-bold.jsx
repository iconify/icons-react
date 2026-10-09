import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goie45bfg.css';
import '../../css/q/q87m_jinq.css';
import '../../css/l/l338p9bqe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goie45bfg"/><path class="q87m_jinq"/><path class="l338p9bqe"/>`,
		"fallback": "energy-icons:house-check-48-bold",
	});
}

export default Component;
