import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo16j27lx.css';
import '../../css/j/jbgenzzof.css';
import '../../css/f/fwxuhy9_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qo16j27lx"/><path class="jbgenzzof"/><path class="fwxuhy9_a"/>`,
		"fallback": "solar:inbox-in-bold",
	});
}

export default Component;
