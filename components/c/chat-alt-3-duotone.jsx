import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd6urnymg.css';
import '../../css/f/f-ksdqydc.css';
import '../../css/c/c7gfsbb7m.css';
import '../../css/s/spxynnb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bd6urnymg"/><circle class="f-ksdqydc"/><circle class="c7gfsbb7m"/><circle class="spxynnb0e"/>`,
		"fallback": "lets-icons:chat-alt-3-duotone",
	});
}

export default Component;
