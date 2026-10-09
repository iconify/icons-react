import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwrb__blp.css';
import '../../css/m/m_hycyb9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwrb__blp"/><path class="m_hycyb9i"/>`,
		"fallback": "energy-icons:grass-48",
	});
}

export default Component;
