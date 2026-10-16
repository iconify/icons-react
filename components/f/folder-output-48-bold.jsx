import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if165db6l.css';
import '../../css/j/jo5-atb-z.css';
import '../../css/n/no5uchbkp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if165db6l"/><path class="jo5-atb-z"/><path class="no5uchbkp"/>`,
		"fallback": "energy-icons:folder-output-48-bold",
	});
}

export default Component;
