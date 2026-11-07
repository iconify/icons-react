import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyqt_gb4g.css';
import '../../css/e/ehzexxbxn.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyqt_gb4g"/><path class="ehzexxbxn"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-figma-bold-duotone",
	});
}

export default Component;
