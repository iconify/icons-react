import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ensv1cbds.css';
import '../../css/c/cgbp4zbep.css';
import '../../css/g/gm5d6ob0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ensv1cbds"/><path class="cgbp4zbep"/><path class="gm5d6ob0a"/>`,
		"fallback": "energy-icons:charger-fault-20-bold",
	});
}

export default Component;
