import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/u/uplt5e.css';
import '../../css/j/j3vs1j.css';
import '../../css/b/botfzx.css';
import '../../css/y/yx0aom.css';
import '../../css/s/so-to-0.css';
import '../../css/s/so-from-62.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyAV2gb7f"><path class="c5xdmn uplt5e"/><path class="j3vs1j"/></mask></defs><path mask="url(#SVGyAV2gb7f)" class="botfzx"/><path class="c5xdmn yx0aom"/>`,
		"fallback": "line-md:beer",
	});
}

export default Component;
