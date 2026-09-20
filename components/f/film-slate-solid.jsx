import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty6ovj9xm.css';
import '../../css/k/kr81jbccc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty6ovj9xm"/><path clip-rule="evenodd" class="kr81jbccc"/>`,
		"fallback": "streamline-plump:film-slate-solid",
	});
}

export default Component;
