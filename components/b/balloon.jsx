import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg5wexjad.css';
import '../../css/g/g806ztb6s.css';
import '../../css/y/ytqo-vbjd.css';
import '../../css/e/e-6w53grg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg5wexjad"/><path class="g806ztb6s"/><path class="ytqo-vbjd"/><path class="e-6w53grg"/>`,
		"fallback": "streamline-emojis:balloon",
	});
}

export default Component;
