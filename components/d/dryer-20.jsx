import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1middb0q.css';
import '../../css/b/b_86fhc7i.css';
import '../../css/t/tk7y5nbyv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1middb0q"/><path class="b_86fhc7i"/><path class="tk7y5nbyv"/>`,
		"fallback": "energy-icons:dryer-20",
	});
}

export default Component;
