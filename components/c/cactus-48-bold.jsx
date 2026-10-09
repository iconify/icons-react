import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvc9z5wej.css';
import '../../css/d/df3f56xlz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvc9z5wej"/><path class="df3f56xlz"/>`,
		"fallback": "energy-icons:cactus-48-bold",
	});
}

export default Component;
