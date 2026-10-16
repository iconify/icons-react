import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o26-z7b6y.css';
import '../../css/c/c4z6olb-l.css';
import '../../css/s/see0y-btr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o26-z7b6y"/><path class="c4z6olb-l"/><path class="see0y-btr"/>`,
		"fallback": "energy-icons:imbalance-48-bold",
	});
}

export default Component;
