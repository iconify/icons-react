import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/o/oc655rbdm.css';
import '../../css/z/zfeu6bbli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="oc655rbdm"/><path class="zfeu6bbli"/>`,
		"fallback": "solar:graph-new-bold-duotone",
	});
}

export default Component;
