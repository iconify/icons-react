import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zibiadcci.css';
import '../../css/a/aq7z88bzf.css';
import '../../css/q/qtsxnt9xi.css';
import '../../css/b/btlc75bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zibiadcci"/><path class="aq7z88bzf"/><path clip-rule="evenodd" class="qtsxnt9xi"/><path clip-rule="evenodd" class="btlc75bib"/>`,
		"fallback": "stash:emoji-laugh-duotone",
	});
}

export default Component;
