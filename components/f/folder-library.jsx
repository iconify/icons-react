import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/byxv1wbzp.css';
import '../../css/d/d24zw2byv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="byxv1wbzp"/><path class="d24zw2byv"/></g>`,
		"fallback": "codicon:folder-library",
	});
}

export default Component;
