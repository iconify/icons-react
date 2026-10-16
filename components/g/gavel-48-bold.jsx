import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir7tugprl.css';
import '../../css/t/tnnq4zbbd.css';
import '../../css/o/o6n1tfudy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir7tugprl"/><path class="tnnq4zbbd"/><path class="o6n1tfudy"/>`,
		"fallback": "energy-icons:gavel-48-bold",
	});
}

export default Component;
