import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu5lx12xc.css';
import '../../css/z/zla48o_aw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu5lx12xc"/><path clip-rule="evenodd" class="zla48o_aw"/>`,
		"fallback": "heroicons:document-magnifying-glass-16-solid",
	});
}

export default Component;
