import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fnf6pdbdu.css';
import '../../css/g/gp0egaclj.css';
import '../../css/e/e2nq-yvbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fnf6pdbdu"/><circle class="gp0egaclj"/><path class="e2nq-yvbg"/></g>`,
		"fallback": "lucide:git-commit-vertical",
	});
}

export default Component;
