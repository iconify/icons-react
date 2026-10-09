import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goie45bfg.css';
import '../../css/q/q87m_jinq.css';
import '../../css/x/x-w4dbc6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goie45bfg"/><path class="q87m_jinq"/><path class="x-w4dbc6n"/>`,
		"fallback": "energy-icons:house-alert-48-bold",
	});
}

export default Component;
