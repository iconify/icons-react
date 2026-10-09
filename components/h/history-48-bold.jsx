import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2o5wdb0f.css';
import '../../css/g/gbgl6tbjc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2o5wdb0f"/><path class="gbgl6tbjc"/>`,
		"fallback": "energy-icons:history-48-bold",
	});
}

export default Component;
