import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nnfpsibon.css';
import '../../css/n/n85_gubpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nnfpsibon"/><path class="n85_gubpj"/></g>`,
		"fallback": "gravity-ui:comments-dot",
	});
}

export default Component;
