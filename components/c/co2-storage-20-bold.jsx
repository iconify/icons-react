import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq84rbcke.css';
import '../../css/r/rx5emixah.css';
import '../../css/k/kqwotpm_a.css';
import '../../css/k/kda2mgbyj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq84rbcke"/><path class="rx5emixah"/><path class="kqwotpm_a"/><path class="kda2mgbyj"/>`,
		"fallback": "energy-icons:co2-storage-20-bold",
	});
}

export default Component;
