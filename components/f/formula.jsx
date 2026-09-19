import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr03lx9eq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr03lx9eq"/>`,
		"fallback": "icon-park-outline:formula",
	});
}

export default Component;
