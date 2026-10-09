import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0vfx9bkz.css';
import '../../css/k/kijssacqj.css';
import '../../css/q/qbege6bku.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0vfx9bkz"/><path class="kijssacqj"/><path class="qbege6bku"/>`,
		"fallback": "energy-icons:hydraulic-cylinder-48-bold",
	});
}

export default Component;
