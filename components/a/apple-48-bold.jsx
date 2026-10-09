import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq9rmtbnw.css';
import '../../css/g/g77nglpfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq9rmtbnw"/><path class="g77nglpfb"/>`,
		"fallback": "energy-icons:apple-48-bold",
	});
}

export default Component;
