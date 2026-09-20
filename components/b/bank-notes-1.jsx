import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j-3ehnblu.css';
import '../../css/j/jd75xrteg.css';
import '../../css/p/pmugc1kfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="j-3ehnblu"/><path class="jd75xrteg"/><path class="pmugc1kfp"/></g>`,
		"fallback": "streamline-cyber:bank-notes-1",
	});
}

export default Component;
