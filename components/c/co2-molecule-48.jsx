import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvx5cvkbp.css';
import '../../css/o/ozmfki5en.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvx5cvkbp"/><path class="ozmfki5en"/>`,
		"fallback": "energy-icons:co2-molecule-48",
	});
}

export default Component;
