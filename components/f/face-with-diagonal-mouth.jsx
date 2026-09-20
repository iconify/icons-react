import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_ywjjbch.css';
import '../../css/h/hrsbdbc-d.css';
import '../../css/e/e-qaj9bzm.css';
import '../../css/a/a50a-ab_g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="k_ywjjbch"/><circle class="hrsbdbc-d"/><path class="e-qaj9bzm"/><path class="a50a-ab_g"/>`,
		"fallback": "openmoji:face-with-diagonal-mouth",
	});
}

export default Component;
