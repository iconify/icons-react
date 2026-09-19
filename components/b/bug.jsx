import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv-jkn1sc.css';
import '../../css/z/zz0-pccgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv-jkn1sc"/><path class="zz0-pccgs"/>`,
		"fallback": "famicons:bug",
	});
}

export default Component;
