import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rqmue42ie.css';
import '../../css/d/dk6z82bvg.css';
import '../../css/v/vvl6uk22v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rqmue42ie"/><path class="dk6z82bvg"/><path class="vvl6uk22v"/></g>`,
		"fallback": "tabler:brand-jira",
	});
}

export default Component;
