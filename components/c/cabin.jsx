import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ul36bu9lo.css';
import '../../css/q/qtnml8brb.css';
import '../../css/b/b8tlqiz5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ul36bu9lo"/><path class="qtnml8brb"/><path class="b8tlqiz5q"/></g>`,
		"fallback": "lucide-lab:cabin",
	});
}

export default Component;
