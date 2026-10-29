import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2_fu_bwp.css';
import '../../css/r/r42-uz-ln.css';
import '../../css/f/fnyksabiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2_fu_bwp"/><path class="r42-uz-ln"/><path class="fnyksabiy"/>`,
		"fallback": "withicons-bauhaus:copy",
	});
}

export default Component;
