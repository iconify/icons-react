import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/j/jdyuftccb.css';
import '../../css/e/ekm30-jss.css';
import '../../css/v/v27l2fbxo.css';
import '../../css/p/p2pw0cbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="jdyuftccb"/><rect class="ekm30-jss"/><path class="v27l2fbxo"/><path clip-rule="evenodd" class="p2pw0cbcg"/></g>`,
		"fallback": "grommet-icons:fan-option",
	});
}

export default Component;
